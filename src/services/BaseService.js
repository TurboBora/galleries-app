import axios from 'axios'

class BaseService {

    constructor() {
        this.HTTP = axios.create({
            baseURL: 'http://localhost:8000/api',
            headers: { 'Content-Type': 'application/json' },
        });
    
    this.HTTP.interceptors.request.use(function(request) {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
          request.headers['Authorization'] = `Bearer ${token}`;
        }
        return request;
      });
  
      this.HTTP.interceptors.response.use(async function(response) {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token && response.status == 401) {
          const { data } = await this.HTTP.post('/refresh-token');
          localStorage.setItem('token', data.token);
        }
        return response;
      });
    }
}

export default BaseService;