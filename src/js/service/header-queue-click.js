import { onRenderLibraryQueue } from '../markup/render-queue'
import { watchedBtn, queueBtn } from '../utils/references'


export async function clickButQueue(e) {
    e.preventDefault();

    watchedBtn.classList.remove('active');
    queueBtn.classList.add('active');

    let page = 1;
    // if (!global.userId) {
    //     await logIn()
    // }
    await onRenderLibraryQueue(page);
}