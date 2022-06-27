import { transmitToRenderNextPage } from '../service/transmit-to-render-next-page';

let currentPage;
let page;

export async function onLeftButtonClick(e) {
    e.preventDefault();
    currentPage = document.querySelector('.pagination__active');
    console.log(currentPage);
    page = Number(currentPage.textContent) - 1;
    console.log(page);
    await transmitToRenderNextPage(page);
}

export async function onRightButtonClick(e) {
    e.preventDefault();
    currentPage = document.querySelector('.pagination__active');
    page = Number(currentPage.textContent) + 1;
    console.log(page);
    await transmitToRenderNextPage(page);
}