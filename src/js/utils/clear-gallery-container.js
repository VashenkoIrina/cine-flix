import { galleryContainer, paginationList } from '../utils/references';

export async function clearGalleryContainer() {
  galleryContainer.innerHTML = '';
  paginationList.innerHTML = '';
}
