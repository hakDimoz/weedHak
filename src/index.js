// Theme toggler //
document.addEventListener("DOMContentLoaded", () => {
	const toggleThemeButton = document.querySelector("#theme-toggler");
	const rootElement = document.documentElement;
	const themeKey = "theme";

	const storedTheme = localStorage.getItem(themeKey);

	if (storedTheme) {
		rootElement.setAttribute("data-theme", storedTheme);
	} else {
		rootElement.setAttribute("data-theme", "light");
	}

	toggleThemeButton.addEventListener("click", () => {
        const currentTheme = rootElement.getAttribute("data-theme");
        console.log(currentTheme)
		const newTheme = currentTheme === "light" ? "dark" : "light";
        console.log(newTheme)
		rootElement.setAttribute("data-theme", newTheme);
		localStorage.setItem(themeKey, newTheme);
	});
});
