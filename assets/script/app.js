const HEAD_TAG = document.getElementById('head');
const BACKDROP = document.getElementById('backdrop');
const MENU_BTN = document.querySelector('.menu-btn');
const MENU_MODAL = document.getElementById('menu-modal');
const IMAGE_ID = document.querySelector('.menu-pic');
const LINE = document.querySelector('.nav-bar__list--after');
const [ABOUT_SECTION_DESKTOP, ABOUT_SECTION_MOBILE] = document.querySelectorAll(
	'.about-section__container ',
);
const ABOUT_IMAGE = document.getElementById('about-img-id');
const ABOUT_SECTION_TEXT = document.querySelectorAll(
	'.about-section__text.animate',
);
const SERVICE_CONTENT = document.querySelectorAll('.service__content');
const OFFER_SERVICE = document.querySelector('.service-section--title');
const PROJECT_SECTION = document.querySelector('.project-section');
const PROJECT_SECTION_CONTENT = document.querySelector(
	'.project-section__content',
);
const PROJECT_SECTION_TITLE = document.querySelector('.project-section__title');
const PROJECT_SECTION_NAV = document.querySelector('.project-section__nav');
const PROJECT_SECTION_SAMPLE = document.querySelector(
	'.project-section__sample',
);
const FLIP_CARD = document.querySelectorAll('.flip-card');
const [STACK_SECTION1, STACK_SECTION2, STACK_SECTION3] =
	document.querySelectorAll('.stack-section__content--list');
const MESSAGE_SECTION = document.querySelector('.message-section');
const FOOTER = document.getElementById('footer');
const MESSAGE_SECTION_CONTENT = document.querySelector(
	'.message-section__content',
);
const CARTOON_PIC2 = document.querySelector('.cartoon-pic2');
const MINI_FORM = document.querySelector('.message-section--form');
const CONTACT_PAGE_FORM = document.querySelector('.contact-form-action');
const GRATITUDE = document.querySelector('.gratitude');
const GRATITUDE_BTN = document.querySelector('.gratitude__button');
const SHAPES = document.querySelectorAll('.shape');
const TOGGLE_MODE = document.getElementById('light-dark');

const DARK_MODE = document.createElement('link');
DARK_MODE.type = 'text/css';
DARK_MODE.rel = 'stylesheet';
DARK_MODE.href = './assets/styles/dark-mode.css';
let modeValue;


window.onload = () => {
   modeValue = window.localStorage.getItem('light-dark');
	if (modeValue === 'dark') {
		TOGGLE_MODE.classList.add('dark-mode');
		HEAD_TAG.appendChild(DARK_MODE);
	} 
};

const BackDrop = () => {
	BACKDROP.classList.toggle('visible');
};

const StopScroll = () => {
	document.body.classList.toggle('StopScroll');
};

const modalDrop = () => {
	BackDrop();
	StopScroll();
};

const backDropHandler = () => {
	if (GRATITUDE.classList.contains('visible')) {
		modalDrop();
		GRATITUDE.classList.remove('visible');
	} else if (MENU_MODAL.classList.contains('visible')) {
		menuBtnHandler();
	}
};

const magicLine = (value) => {
	LINE.className = 'nav-bar__list--after';
	LINE.classList.add(`${value}`);
};

const movingShapes = () => {
	for (const shape of SHAPES) {
		if (shape.classList.contains('rectangle')) {
			let x = Math.random();
			shape.style.top = `calc(20% * ${x})`;
			shape.style.left = `calc(80% * ${x})`;
		} else if (shape.classList.contains('rounded')) {
			let x = Math.random();
			shape.style.top = `calc(50% * ${x})`;
			shape.style.left = `calc(80% * ${x})`;
		} else if (shape.classList.contains('bottom')) {
			let x = Math.random();
			shape.style.top = `calc(50% * ${x})`;
			shape.style.left = `calc(80% * ${x})`;
		} else if (shape.classList.contains('circle')) {
			let x = Math.random();
			shape.style.top = `calc(150% * ${x})`;
			shape.style.left = `calc(80% * ${x})`;
		} else if (shape.classList.contains('triangle')) {
			let x = Math.random();
			shape.style.top = `calc(35% * ${x})`;
			shape.style.left = `calc(80% * ${x})`;
		} else if (shape.classList.contains('diamond')) {
			let x = Math.random();
			shape.style.top = `calc(200% * ${x})`;
			shape.style.left = `calc(80% * ${x})`;
		} else if (shape.classList.contains('parallelogram')) {
			let x = Math.random();
			shape.style.top = `calc(200% * ${x})`;
			shape.style.left = `calc(80% * ${x})`;
		} else if (shape.classList.contains('rectangle1')) {
			let x = Math.random();
			shape.style.top = `calc(100% * ${x})`;
			shape.style.left = `calc(80% * ${x})`;
		} else if (shape.classList.contains('rounded1')) {
			let x = Math.random();
			shape.style.top = `calc(200% * ${x})`;
			shape.style.left = `calc(80% * ${x})`;
		} else if (shape.classList.contains('triangle')) {
			let x = Math.random();
			shape.style.top = `calc(100% * ${x})`;
			shape.style.left = `calc(80% * ${x})`;
		}
	}
};
setInterval(() => {
	movingShapes();
}, 4000);

const gratitudeModalHandler = () => {
	modalDrop();
	GRATITUDE.classList.toggle('visible');
};

const menuBtnHandler = () => {
	modalDrop();
	MENU_BTN.firstElementChild.classList.toggle('hidden');
	MENU_BTN.lastElementChild.classList.toggle('hidden');
	MENU_MODAL.classList.add('invisible');
	MENU_MODAL.classList.toggle('visible');
};

if (
	!(
		window.location.pathname.includes('contact.html') ||
		window.location.pathname.includes('work.html')
	)
) {
	const observerHandler1 = (element, animate, observe) => {
		const observer = new IntersectionObserver(
			function (entries) {
				if (entries[0].isIntersecting === true) {
					element.classList.add(`${animate}`);
				}
			},

