import { IResumeData } from '../components/types';
import jsPDF from 'jspdf';
import { Dispatch, SetStateAction } from 'react';
import { IGenerateTemplateProps } from './types';



export const generateTemplate1 = ({resumeDataCopy, setBlobUrl}: IGenerateTemplateProps): jsPDF => {
  const doc = new jsPDF();
  const htmlStringTemp = template1(resumeDataCopy)
  doc.html(htmlStringTemp, {
    callback: async function (doc: { output: (arg0: string) => BlobPart }) {
      let blobPDF = new Blob([doc.output('blob')], {
        type: 'application/pdf',
      });
      const blobUrl = URL.createObjectURL(blobPDF);
      setBlobUrl(blobUrl);
    },
    x: 10,
    y: 10,
  });
  return doc;
}

export const template1 = (resumeData: IResumeData) => {
  const { template, aboutMe, sections } = resumeData;

  const temp = {
    get aboutMeString() {
      const infoList = [aboutMe.address, aboutMe.phoneNo, aboutMe.email]
      return `<header>
                <h2>${aboutMe.name}&nbsp;${aboutMe.lastName}</h2>
                <ul>
                    ${infoList.map((info) => {console.log({info: info});return `<li>${info || ''}</li>`})}
                </ul>
                <ul>
                    ${aboutMe.links?.map(
                      (link) =>
                        `<li><a href="${link.url}" target="_blank">${link.label}</a></li>`,
                    )}
                </ul>
            </header>`;
    },
    get allSections() {
      // call detailed and bullet, map `section`
      const allSections = sections.map((section) => {
        if (section.sectionType === 'detailed') {
          const subSections = section.subSections.map((subSection) => `
          <li>
            <h4>${subSection.title},&nbsp;${subSection.location}</h4>
            <h5>${subSection.subtitle}&nbsp;${subSection.startDate}-${subSection.endDate}</h5>
            <h5></h5>
            <ul>
              ${subSection.bullets.map((bullet) => `<li>${bullet.text}</li>`)}
            </ul>
       	</li>
          `)
          return `<section><h3>${section.sectionTitle}</h3>
		<ul>
      ${subSections.join('\n')}
		</ul>
	</section>`
        } else return `<section><h3>${section.sectionTitle}</h3>
		<ul>
			${section.bullets.map((bullet) => `<li>${bullet.text}</li>`)}
		</ul>
	</section>`
      });
      console.log({allSections: allSections})
      return allSections.join('\n');
    },
  };

  const styles = `<style>
html {
    background: white;
    color: black;
    font: 5px 'Helvetica Neue', Arial, sans-serif;
}
ul {
  padding-inline-start: 1rem;
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
</style>`

  const res = `
<body>
  ${styles}
	${temp.aboutMeString}
  ${temp.allSections}
</body>`;
  return res;
};
