import { paginationList, arrowBtn } from '../utils/references';
import { onCreatePaginationTemplate } from './pagination-markup';

export async function onRenderPagination(response) {
    if (response.total_pages === 1) {
        arrowBtn.classList.add('visually-hidden');
    } else {
        arrowBtn.classList.remove('visually-hidden');
    }

    const currentPage = response.page;

    const markup = await onCreatePaginationTemplate(response);

    paginationList.insertAdjacentHTML('beforeend', markup);

    const curentBtn = paginationList.querySelector(`[data-set = '${currentPage}']`);

    curentBtn.classList.add('pagination__active');
}