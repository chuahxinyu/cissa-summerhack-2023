import { IResumeData } from '../components/types';
import jsPDF from 'jspdf';
import { IGenerateTemplateProps } from './types';

type StringOptional = string | undefined;

export const generateTemplate1 = ({
  resumeDataCopy,
  setBlobUrl,
}: IGenerateTemplateProps): jsPDF => {
  const doc = new jsPDF('p', 'pt', 'a4');
  let margin = 36; // narrow margin - 12.7 mm
  const htmlStringTemp = template1(resumeDataCopy)
  doc.html(htmlStringTemp, {
    callback: async function (doc: { output: (arg0: string) => BlobPart }) {
      const blobPDF = new Blob([doc.output('blob')], {
        type: 'application/pdf',
      });
      const blobUrl = URL.createObjectURL(blobPDF);
      setBlobUrl(blobUrl);
    },
    margin: [margin, margin, margin, margin],
    autoPaging: 'text',
  });
  return doc;
};

export const template1 = (resumeData: IResumeData) => {
  const { aboutMe, sections } = resumeData;

  const arrayToBullets = (arr: Array<StringOptional>): string => {
    return arr
      .map((item: StringOptional) => `<li>${item || ''}</li>`)
      .reduce((result: string, item: string): string => result + item, '');
  };

  const temp = {
    get aboutMeString() {
      const infoList = [aboutMe.address, aboutMe.phoneNo, aboutMe.email];
      return `<header>
                <h2>${aboutMe.name}&nbsp;${aboutMe.lastName}</h2>
                <ul>
                  ${arrayToBullets(infoList)} 
                </ul>
                <ul>
                    ${aboutMe.links?aboutMe.links.map(
                      (link) =>
                        `<li><a href="${link.url}" target="_blank">${link.label}</a></li>`,
                    ).reduce((result: string, item: string): string => result + item, ''):''}
                </ul>
            </header>`;
    },
    get allSections() {
      // call detailed and bullet, map `section`
      const allSections = sections.map((section) => {
        if (section.sectionType === 'detailed') {
          const subSections = section.subSections.map(
            (subSection) => `
          <li>
            <h4>${subSection.title}</h4>
            <h5>${subSection.subtitle}</h5>
            <h5>${subSection.location}</h5>
            <h5>${subSection.startDate}&nbsp;-&nbsp;${subSection.endDate}</h5>
            <ul>
              ${subSection.bullets.map((bullet) => `<li>${bullet.text}</li>`).join('')}
            </ul>
       	</li>
          `,
          );
          return `<section><h3>${section.sectionTitle}</h3>
		<ul>
      ${subSections.join('')}
		</ul>
	</section>`;
        } else
          return `<section><h3>${section.sectionTitle}</h3>
		<ul>
			${section.bullets.map((bullet) => `<li>${bullet.text}</li>`).join('')}
		</ul>
	</section>`;
      }).join('');
      return allSections;
    },
  };

  const styles = `<style>
body {
    background: white;
    color: black;
    font: 18px 'Helvetica Neue', Arial, sans-serif;
    width: 100px;
}
ul {
  padding-inline-start: 1rem;
}
h4 {
  margin-bottom: 0.5rem;
}
h5 {
  padding: 0rem;
  margin-top: 0rem;
  margin-bottom: 0.5rem;
}
li {
  list-style-type: disc;
}
.headline-name {
    border-bottom: 1px solid black;
    padding-bottom: .5em;
}
a,
a:link,
a:visited {
    border-bottom: 1px dotted rgb(0, 120, 180);
    color: rgb(0, 120, 180);
    padding: .2em .1em;
    text-decoration: none;
}
a:focus,
a:hover,
a:active {
    background-color: rgb(255, 245, 0);
    border-bottom: 1px solid rgb(0, 120, 180);
    color: rgb(0, 120, 180);
}
</style>`;

  const res = `
<body>
  ${styles}
	${temp.aboutMeString}
  ${temp.allSections}
</body>`;
  return res;
};
