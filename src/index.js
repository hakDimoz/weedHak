// Theme toggler //
document.addEventListener("DOMContentLoaded", () => {
	const toggleThemeButton = document.querySelector("#theme-toggler");
	const rootElement = document.documentElement;
	const themeKey = "theme";

	initiliseTheme(themeKey, rootElement);

	toggleThemeButton.addEventListener("click", () => {
		toggleTheme(rootElement, themeKey);
		updateCheckboxVisual(rootElement);
	});
});

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

function updateCheckboxVisual(rootElement) {
	const checkbox = document.querySelector("#theme-toggler-checkbox");
	const theme = rootElement.getAttribute("data-theme");

	if (theme === "light") {
		checkbox.checked = false;	
	} else {
		checkbox.checked = true;
	}
}

function preventCheckboxClick(event) {
	event.stopPropagation();
	event.preventDefault();
}
