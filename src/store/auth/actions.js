import authService from '../../services/AuthService'

export const actions = {
    async register(store, data) {
        const { user, token } = await authService.register(data);
        localStorage.setItem('token', JSON.stringify(token));

        store.commit('setActiveUser', user);
        store.commit('setToken', token);
    }
}