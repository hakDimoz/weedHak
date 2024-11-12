document.addEventListener("DOMContentLoaded", () => {
	const rootElement = document.documentElement;

	addEventListenerToToggleThemeButton(rootElement);
	animateNavbar();
	populateStarContainers();
});

/////////////////// Theme toggler /////////////////////////////
function addEventListenerToToggleThemeButton(rootElement) {
	const themeKey = "theme";

	initiliseTheme(themeKey, rootElement);

	if (window.matchMedia("(min-width: 768px)").matches) {
		// Screen size is over the md breakpoint (768px)
		const toggleThemeButton = document.querySelector("#theme-toggler-md");
		updateCheckboxVisual(rootElement, toggleThemeButton);
		toggleThemeButton.addEventListener("click", () => {
			toggleTheme(rootElement, themeKey);
		});
	} else {
		// Screen size is less than 768px
		const toggleThemeButton = document.querySelector("#theme-toggler");
		const checkbox = document.querySelector("#theme-toggler-checkbox");
		updateCheckboxVisual(rootElement, checkbox);
		toggleThemeButton.addEventListener("click", () => {
			toggleTheme(rootElement, themeKey);
			updateCheckboxVisual(rootElement, checkbox);
		});
	}

}

function toggleTheme(rootElement, themeKey) {
	const currentTheme = rootElement.getAttribute("data-theme");
	const newTheme = currentTheme === "light" ? "dark" : "light";

	rootElement.setAttribute("data-theme", newTheme);
	localStorage.setItem(themeKey, newTheme);
}

function initiliseTheme(themeKey, rootElement) {
	const storedTheme = localStorage.getItem(themeKey);

	if (storedTheme) {
		rootElement.setAttribute("data-theme", storedTheme);
	} else {
		rootElement.setAttribute("data-theme", "light");
	}
}

function updateCheckboxVisual(rootElement, checkbox) {
	const theme = rootElement.getAttribute("data-theme");

	if (theme === "light" || theme === null) {
		checkbox.checked = false;
	} else {
		checkbox.checked = true;
	}
}

function preventCheckboxClick(event) {
	event.stopPropagation();
	event.preventDefault();
}

////////////////// Navbar animation ///////////////////////////
function animateNavbar() {
	const navbar = document.querySelector("#navbar");
	let lastScrollY = window.scrollY;

	window.addEventListener("scroll", () => {
		const currentScrollY = window.scrollY;

		if (currentScrollY > lastScrollY) {
			// User is scrolling down, hide the navbar
			navbar.style.transform = "translateY(-100%)";
		} else {
			// User is scrolling up, show the navbar
			navbar.style.transform = "translateY(0)";
		}

		lastScrollY = currentScrollY;
	});
}

/////////////////// Star Containers ///////////////////////
function populateStarContainers() {
	const starContainers = document.querySelectorAll(".star-container");

	starContainers.forEach((container) => {
		populateStarContainer(container);
	});
}

function populateStarContainer(container) {
	const numberOfStars = 5;
	const starSVG = `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
			class="text-yellow-500 size-7"	
		>
			<title>star</title>
			<path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
		</svg>
	`;

	for (let i = 0; i < numberOfStars; i++) {
		container.innerHTML += starSVG;
	}
}
