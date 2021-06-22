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

    async getMyProfile() {
        const { data } = await this.HTTP.get('/me');
        return data;
    }
}

const auth = new AuthService();
export default auth;
