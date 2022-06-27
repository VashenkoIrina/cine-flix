import { transmitToRenderNextPage } from '../service/transmit-to-render-next-page';

export async function onPaginationBtnClick(e) {
    e.preventDefault();
    const page = e.target.textContent;
    await transmitToRenderNextPage(page);
}
