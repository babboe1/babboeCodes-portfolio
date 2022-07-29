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
			{ threshold: [0.8] },
		);
		observer.observe(observe);
	};

	observerHandler1(ABOUT_SECTION_DESKTOP, 'right-in', ABOUT_SECTION_DESKTOP);
	observerHandler1(ABOUT_SECTION_MOBILE, 'right-in', ABOUT_SECTION_MOBILE);
	observerHandler1(ABOUT_IMAGE, 'left-in', ABOUT_IMAGE);
	observerHandler1(PROJECT_SECTION, 'start-page', PROJECT_SECTION_CONTENT);
	observerHandler1(PROJECT_SECTION_TITLE, 'start-page', PROJECT_SECTION_TITLE);
	observerHandler1(PROJECT_SECTION_NAV, 'start-page', PROJECT_SECTION_NAV);
	observerHandler1(STACK_SECTION1, 'start-page', STACK_SECTION1);
	observerHandler1(STACK_SECTION2, 'start-page', STACK_SECTION2);
	observerHandler1(STACK_SECTION3, 'start-page', STACK_SECTION3);
	observerHandler1(MESSAGE_SECTION, 'start-page', MESSAGE_SECTION);
	observerHandler1(
		MESSAGE_SECTION_CONTENT,
		'left-in',
		MESSAGE_SECTION_CONTENT,
	);
	observerHandler1(CARTOON_PIC2, 'right-in', CARTOON_PIC2);
	observerHandler1(FOOTER, 'opacity', FOOTER);

	const observerHandler2 = (element, animate, observeEl) => {
		const observer = new IntersectionObserver(
			function (entries) {
				if (entries[0].isIntersecting === true) {
					element.forEach((el, idx) => {
						el.classList.add(`${animate}`);
						el.style.animationDuration = `1s`;
						el.style.animationDelay = `${idx}s`;
						el.addEventListener('mouseover', (e) => {
							e.currentTarget.style.animation = 'none';
							e.currentTarget.classList.add('scale');
							e.currentTarget.style.transition = '1s';
							e.currentTarget.style.color = '#ea1d5d';
						});
						el.addEventListener('mouseleave', (e) => {
							e.currentTarget.classList.remove('scale');
							e.currentTarget.style.color = '';
							el.style.opacity = 1;
						});
					});
				}
			},
			{ threshold: [1] },
		);
		observer.observe(observeEl);
	};
	observerHandler2(ABOUT_SECTION_TEXT, 'left-in', ABOUT_SECTION_TEXT[0]);

	const observerHandler3 = (element, animate1, animate2, observeEl) => {
		const observer = new IntersectionObserver(
			function (entries) {
				if (entries[0].isIntersecting === true) {
					if (window.innerWidth < 768) {
						element.forEach((section, idx) => {
							if (idx % 2 === 0) {
								section.classList.add(`${animate1}`);
								section.style.animationDuration = `1`;
								section.style.animationDelay = `${idx}s`;
							} else {
								section.classList.add(`${animate2}`);
								section.style.animationDuration = `1`;
								section.style.animationDelay = `${idx}s`;
							}

							section.addEventListener('mouseover', (e) => {
								e.currentTarget.style.animation = 'none';
								e.currentTarget.classList.add('scale');
								e.currentTarget.style.transition = '1s';
							});
							section.addEventListener('mouseleave', (e) => {
								e.currentTarget.classList.remove('scale');
								section.style.opacity = 1;
							});
						});
					} else {
						observerHandler2(SERVICE_CONTENT, 'left-in', OFFER_SERVICE);
					}
				}
			},
			{ threshold: [0.5] },
		);
		observer.observe(observeEl);
	};
	observerHandler3(SERVICE_CONTENT, 'left-in', 'right-in', OFFER_SERVICE);

	const projectAnimate = () => {
		if (window.innerWidth < 768) {
			PROJECT_SECTION_SAMPLE.style.opacity = 1;
			FLIP_CARD.forEach((section, idx) => {
				if (idx % 2 === 0) {
					observerHandler1(section, 'left-in', section);
				} else {
					observerHandler1(section, 'right-in', section);
				}
			});
		} else {
			FLIP_CARD.forEach((section, idx) => {
				section.style.opacity = 1;
			});
			observerHandler1(
				PROJECT_SECTION_SAMPLE,
				'project-animate',
				PROJECT_SECTION_NAV,
			);
		}
	};

	projectAnimate();
}

MINI_FORM.addEventListener('submit', (e) => {
	gratitudeModalHandler();
	e.preventDefault();
	e.target['email-id'].value = '';
});

if (window.location.pathname.includes('/contact.html')) {
	CONTACT_PAGE_FORM.addEventListener('submit', (e) => {
		gratitudeModalHandler();
		e.preventDefault();
		e.target['full-name'].value = '';
		e.target['email-tag'].value = '';
		e.target['user-message'].value = '';
	});
}

const toggleModeHandler = () => {
	if (TOGGLE_MODE.className === 'light-mode') {
		TOGGLE_MODE.classList.add('dark-mode');
		HEAD_TAG.appendChild(DARK_MODE);
      LIGHT_DARK_VALUE = true;
      window.localStorage.removeItem('light-dark');
      window.localStorage.setItem('light-dark', `dark`);
      
	} else if (TOGGLE_MODE.className === 'light-mode dark-mode') {
		TOGGLE_MODE.classList.remove('dark-mode');
		HEAD_TAG.removeChild(DARK_MODE);
		window.localStorage.removeItem('light-dark');
		window.localStorage.setItem('light-dark', `light`);
	}
};

BACKDROP.addEventListener('click', backDropHandler);
MENU_BTN.addEventListener('click', menuBtnHandler);

