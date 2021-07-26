import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		isDark: true
	},
	getters: {
		getIsDark(state) {
			return state.isDark
		}
	},
	mutations: {
		changeIsDark(state) {
			state.isDark = !state.isDark
		}
	},
  actions: {},
  modules: {},
});
