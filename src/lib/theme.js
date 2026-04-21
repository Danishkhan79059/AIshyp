export const THEME_STORAGE_KEY = "aiship-theme";

export const THEME_DARK = "dark";
export const THEME_LIGHT = "light";

export const THEME_INIT_SCRIPT = `(function () {
  var storageKey = "${THEME_STORAGE_KEY}";
  var theme = "${THEME_LIGHT}";
  try {
    var storedTheme = localStorage.getItem(storageKey);
    if (storedTheme === "${THEME_DARK}" || storedTheme === "${THEME_LIGHT}") {
      theme = storedTheme;
    } else {
      var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      theme = prefersDark ? "${THEME_DARK}" : "${THEME_LIGHT}";
    }
  } catch (e) {}
  var root = document.documentElement;
  root.classList.remove("${THEME_DARK}", "${THEME_LIGHT}");
  root.classList.add(theme);
  root.style.colorScheme = theme;
})();`;
