import { desktopShiftPages, mobileShiftPages } from '../utils/constants';
import { extremePaginationButtons } from '../utils/extreme-pagination-buttons';

export async function onCreatePaginationTemplate(response) {
    let shiftPage = desktopShiftPages;
    let beforePage;
    let afterPage;

    const displayWidth = window.innerWidth;

    const currentPage = response.page;
    const totalPages = response.total_pages;

    if (displayWidth < 480) {
        shiftPage = mobileShiftPages;
    }

    if (currentPage < shiftPage + 1) {
        beforePage = shiftPage - 1;

        afterPage = 2 * (shiftPage + 1);
    } else {
        beforePage = currentPage - shiftPage + 1;
        afterPage = currentPage + shiftPage + 1;
    }

    if (afterPage >= totalPages) {
        afterPage = totalPages + 1;
    }

    extremePaginationButtons(currentPage, totalPages);

    let array = [];
    for (let i = beforePage; i <= afterPage; i += 1) {
        if (i - 1 > 0) {
            array.push(
                `<button type="button" class="pagination__btn page" data-set = "${i - 1
                }">${i - 1}</button>`
            );
        }
    }

    return array.join('');
}
