export const state = () => ({
  theme: "dark",
});

export const mutations = {
  initDataTheme(state) {
    const theme = localStorage.getItem("theme");
    document.documentElement.dataset.theme = theme || "dark";
    state.theme = theme;
  },
  setTheme(state, theme) {
    localStorage.setItem("theme", theme);
    document.documentElement.dataset.theme = theme;
    state.theme = theme;
  },
  toggleTheme(state) {
    let newTheme = state.theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    document.documentElement.dataset.theme = newTheme;
    state.theme = newTheme;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
