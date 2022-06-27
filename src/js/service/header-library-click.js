import { onRenderLibrary } from '../markup/render-watched'
import { watchedBtn, queueBtn } from '../utils/references'


export async function clickButWatched(e) {
    e.preventDefault();

    watchedBtn.classList.add('active');
    queueBtn.classList.remove('active');

    let page = 1;
    // if (!global.userId) {
    //     await logIn()
    // }
    await onRenderLibrary(page);
}