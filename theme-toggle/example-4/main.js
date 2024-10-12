// tutorial: https://www.youtube.com/watch?v=fyuao3G-2qg

const colorThemes = document.querySelectorAll('[name="theme"]');

// Two things we need to do:
// 1. store the theme that our user selected
// 2. apply the theme when the page loads again

// store theme
const storeTheme = (theme) => {
  localStorage.setItem("theme", theme);
};

// apply theme
const getTheme = () => {
  const activeTheme = localStorage.getItem("theme");

  colorThemes.forEach((theme) => {
    if (theme.id === activeTheme) {
      theme.checked = true;
    }
  });

  // fallback for no :has support
  document.documentElement.className = theme;
};

colorThemes.forEach((theme) => {
  theme.addEventListener("click", () => {
    storeTheme(theme.id);
  });
});

document.onload = getTheme();
