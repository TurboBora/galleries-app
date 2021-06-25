import BaseService from './BaseService';

class GalleriesService extends BaseService {

    async getAll(){
        const { data } = await this.HTTP.get('/galleries');
        return data;
    }
    
}

export default new GalleriesService();