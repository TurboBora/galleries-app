import BaseService from './BaseService';

class AuthService extends BaseService {

    async login(credentials) {
        const { data } = await this.HTTP.post('/login', credentials);
        return data;
    }

    async register(user) {
        const { data } = await this.HTTP.post('/register', user);
        return data;
    }

    logout() {
        return this.HTTP.post('/logout');
    }

    async me() {
        const { data } = await this.HTTP.post('/current-user');
        console.log(data);
        return data;
    }
}

export default new AuthService();

