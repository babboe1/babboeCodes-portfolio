const PROJECT_SECTION_CONTAINER = document.getElementById('project-section');

const createElement = (element) => {
	return document.createElement(element);
};

const projectObject = [
	{
		className: 'blur-bg1',
		title: 'Interior Design Landing Page',
		innerHtml: `TThis is Shady-Rymes, an Interior design Landing page that
							displays a collection of carpentry works used for interiors
							designs.<br />
							Users can browse through to pick a design of their choice
							choice. <br />
							This webpage also packs quite a number of features that
							makes the user experience awesome`,
		flipCardBtnHref: 'https://interior-design-landing-page.netlify.app/',
		projectLinkHref:
			'https://github.com/babboe1/Interior-Design-Langing-Page',
	},
	{
		className: 'blur-bg2',
		title: 'Crowdfunding Product page',
		innerHtml: `This is a client-side crowdfunding Landing page. A solution
							to the Crowdfunding product page challenge on Frontend
							Mentor. This webpage was designed to seek funding for a
							bamboo monitor riser project. <br />It was built with quite
							a lot of features that makes it very interactive and serves
							its purpose for crowdfunding`,
		flipCardBtnHref: 'https://babboe1-crowdfunding-product-page.netlify.app/',
		projectLinkHref: 'https://github.com/babboe1/Crowdfunding-product-page',
	},
	{
		className: 'blur-bg3',
		title: 'Loopstudio Landing Page',
		innerHtml: `This is a solution to the Loopstudios landing page
							challenge on Frontend Mentor.This webpage is a landing page
							of a studio that gives users immersive experience in
							Interactive VR.
							<br />
							Built with wonderful animation that immerses the user and
							serve is purpose as a center of attraction.`,
		flipCardBtnHref: 'https://loopstudio-landings-page.netlify.app/',
		projectLinkHref: 'https://github.com/babboe1/Loopstudio-Landing-Page',
	},
	{
		className: 'blur-bg4',
		title: 'Room Design Homepage',
		innerHtml: `This is a solution to the Room homepage challenge on
							Frontend Mentor. This webpage display a collection of room
							designs in a carousel that the user can browse through to
							pick their choice.<br />
							This webpage was designed with quite a number of features
							that serves its purpose as a Room Design Homepage`,
		flipCardBtnHref: 'https://room-design-homepage.netlify.app/',
		projectLinkHref: 'https://github.com/babboe1/Room-Design-Homepage',
	},
	{
		className: 'blur-bg5',
		title: 'Fylo Landing Page',
		innerHtml: `This is a client-side Landing page for Fylo. A solution to
							Fylo landing page frontend mentor challenge. <br />
							Fylo stores all your most important files in one secure
							location. Access them wherever you need, share and
							collaborate with friends family, and co-workers.`,
		flipCardBtnHref: 'https://fylo-landing-page-babboe1.netlify.app/',
		projectLinkHref: 'https://github.com/babboe1/Fylo-Landing-Page',
	},
	{
		className: 'blur-bg6',
		title: 'Sunnyside Landing Page',
		innerHtml: `is a solution to the Sunnyside agency landing page
							challenge on Frontend Mentor.
							<br />
							This webpage ia a client side Landing page of a brand that
							offers graphic designs and photography service`,
		flipCardBtnHref: 'https://sunnysides-landingpage.netlify.app/',
		projectLinkHref: 'https://github.com/babboe1/Sunnyside-Landing-Page',
	},
	{
		className: 'blur-bg7',
		title: 'Your Personal Movie Data-base',
		innerHtml: `This is "Your personal movie data-base", a web application
							for storing list of personal movies, which also persist
							data to web browser local storage, designs.<br />
							This simply means you can always store and retains your
							data even after a refresh has been made on the web page`,
		flipCardBtnHref: 'https://personal-movie-database.netlify.app/',
		projectLinkHref: 'https://github.com/babboe1/Personal-Movie-Database',
	},
	{
		className: 'blur-bg10',
		title: 'Kiss Anime Web Clone',
		innerHtml: `This is a clone of the Cartoon's Area web application
							Landing page, a multi webpage application design based on a
							Japanese anime site,<br />
							Visitors are able to navigate through all pages, check
							descriptions about the anime movies and lots more...`,
		flipCardBtnHref: 'https://anime-site-clone.netlify.app/',
		projectLinkHref: 'https://github.com/babboe1/Animesite-clone',
	},
	{
		className: 'blur-bg11',
		title: "Cartoon's Area web clone",
		innerHtml: `This is a clone of the Cartoon's Area web application, a
							multi webpage application design based on a Japanese anime
							site,<br />
							Visitors are able to navigate the page, check descriptions
							about the anime movies and lots more...`,
		flipCardBtnHref: 'https://babboes-area-animesiteclone.netlify.app/',
		projectLinkHref: 'https://github.com/babboe1/Babboes-anime-site',
	},
	{
		className: 'blur-bg8',
		title: 'Simple Profile Web Page',
		innerHtml: `This is a Simple profile landing page built as a solution
							to one of AltSchool Africa cohort 2022 1st semester task<br />
							Visitors can browse through each pages to unveil
							information about me <br />
							This webpage also Includes a web app calculator design`,
		flipCardBtnHref: 'https://simple-info-profile.netlify.app/',
		projectLinkHref: 'https://github.com/babboe1/Altschool-task/tree/master',
	},
	{
		className: 'blur-bg9',
		title: 'Order Summary Card',
		innerHtml: `This is a solution to the Order Summary Card
							challenge on Frontend Mentor.
							<br />
							My first Project on Frontend Mentor`,
		flipCardBtnHref: 'https://order-summary-card-mini.netlify.app/',
		projectLinkHref: 'https://github.com/babboe1/Order-summary-card',
	},
	// {
	// 	className: '',
	// 	title: '',
	// 	innerHtml: '',
	// 	flipCardBtnHref: '',
	// 	projectLinkHref: '',
	// },
];

projectObject.forEach((project) => {
	let WorksProjectContent = createElement('div');
	WorksProjectContent.className = 'project-content';

	let projectBlur = createElement('div');
	projectBlur.className = 'project-blur';

	let projectTileDiv = createElement('div');
	projectTileDiv.className = 'project-tile';

	let projectTileNav = createElement('div');
	projectTileNav.className = 'project-tile__nav';

	let projectTileH3 = createElement('h3');
	projectTileH3.className = 'project-tile__title';

	let projectTileText = createElement('p');
	projectTileText.className = 'project-tile__text flip-card__text';

	let flipCardBtn = createElement('a');
	flipCardBtn.className = 'flip-card__action';
	flipCardBtn.textContent = 'view live project';

	let projectTileLink = createElement('a');
	projectTileLink.className =
		'project-tile__link project-section__btn-link__sub';

	let githubIcon = createElement('img');
	githubIcon.className = 'social-media__image';
	githubIcon.src = './assets/images/icons/github.svg';
	githubIcon.alt = 'Github';

	let viewGithub = createElement('span');
	viewGithub.textContent = 'view on GitHub';

	WorksProjectContent.append(projectBlur, projectTileDiv, projectTileNav);
	projectTileDiv.append(projectTileH3, projectTileText);
	projectTileNav.append(flipCardBtn, projectTileLink);
	projectTileLink.append(githubIcon, viewGithub);

	projectBlur.classList.add(project.className);
	projectTileH3.textContent = project.title;
	projectTileText.innerHTML = project.innerHtml;
	flipCardBtn.href = project.flipCardBtnHref;
	projectTileLink.href = project.projectLinkHref;
	PROJECT_SECTION_CONTAINER.appendChild(WorksProjectContent);
});
