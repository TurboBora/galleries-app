import authService from "../../services/AuthService";

export const actions = {
  async register(store, data) {
    const { user, token } = await authService.register(data);
    localStorage.setItem("token", JSON.stringify(token));

    store.commit("setActiveUser", user);
    store.commit("setToken", token);
  },

  async login({ commit }, credentials) {
    const { user, token } = await authService.login(credentials);
    localStorage.setItem("token", JSON.stringify(token));

    commit("setActiveUser", user);
    commit("setToken", token);
  },

  async logout({ commit }) {
    await authService.logout();
    commit("setToken", null);
    commit("setActiveUser", null);
    localStorage.removeItem("token");
  },

  async getActiveUser(store) {
    if (store.getters.isAuthenticated) {
      const activeUser = await authService.me();
      store.commit("setActiveUser", activeUser);
    } else {
      store.commit("setActiveUser", null);
    }
  },
};
