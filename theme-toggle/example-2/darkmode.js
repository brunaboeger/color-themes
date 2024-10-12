// tutorial: https://www.youtube.com/watch?v=wodWDIdV9BY&list=PL4-IK0AVhVjNPZD78QbOslWCC_SaMCbv5
// https://www.youtube.com/watch?v=_yCgeXFAXTM

let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

// check if dark mode is enabled
// if it's enabled, turn it off
// if it is not, enable it

const enableDarkMode = () => {
  // 1. add the class dark-mode to the body
  document.body.classList.add("dark-mode");
  // 2. update darkMode in the localStorage
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  // get the localStorage value and update de variable
  darkMode = localStorage.getItem("darkMode");

  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
