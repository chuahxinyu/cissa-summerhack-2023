import { IResumeData } from '../components/types';

export const template1 = (resumeData: IResumeData) => {
  const { template, aboutMe, sections } = resumeData;

  const temp = {
    get aboutMeString() {
      return `<header>
                <h2>${aboutMe.name}${
        aboutMe.lastName ? ' ' + aboutMe.lastName : null
      }</h2>
                <ul id="header-left" title="mail and phone">
                    ${aboutMe.address ? `<li>${aboutMe.address}</li>` : null}
                    ${aboutMe.phoneNo ? `<li>${aboutMe.phoneNo}</li>` : null}
                </ul>
                <ul id="header-right" title="web">
                    ${aboutMe.links?.map(
                      (link) =>
                        `<li><a href="${link.url}" target="_blank">${link.label}</a></li>`,
                    )}
                </ul>
            </header>`;
    },
  };
  const res = `
<body>
<style>
html {
    background: white;
    color: black;
    font: 5px 'Helvetica Neue', Arial, sans-serif;
}
body {
    margin: 2em auto;
    max-width: 760px;
    width: 65%;
}
section {
    clear: both;
    margin-top: 3em;
}
li {
    list-style-type: disc;
}
section > ul > li,
header > ul > li {
    list-style-type: none;
    margin-bottom: .5em;
}
.headline-name {
    border-bottom: 1px solid black;
    padding-bottom: .5em;
}
.contact-column {
    float: left;
    padding: 0 1px;
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
</style>
	${temp.aboutMeString}
	<section id="education"><h3>Education</h3>
		<ul title="education">
		<li>
			<h4>Degree, Where, When</h4>
        		<ul>
        			<li>Stuff about your degree</li>
       		</ul>
       	</li>
		</ul>
	</section>
	<section id="skills"><h3>Skills</h3>
		<ul title="skills">
			<li>Skill 1</li>
      <li>Skill 2</li>
		</ul>
	</section>
	<section id="experience"><h3>Experience</h3>
	<ul title="experience">
		<li>
			<h4>Job Title, Place, Time</h4>
			<ul>
				<li>Stuff you did</li>
			</ul>
		</li>
	</ul>
	</section>
</body>`;
  return res;
};
