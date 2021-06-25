import GalleriesService from '../../services/GalleriesService'

export const actions = {
  async getAllGalleries(store) {
    const galleries = await GalleriesService.getAll();
    store.commit('setGalleries', galleries);
  }
}