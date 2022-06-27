import { leftBtn, rightBtn } from '../utils/references';

export async function extremePaginationButtons(currentPage, totalPages) {
    if (currentPage === 1) {
        leftBtn.disabled = true;
    } else {
        leftBtn.disabled = false;
    }

    if (currentPage === totalPages) {
        rightBtn.disabled = true;
    } else {
        rightBtn.disabled = false;
    }
}