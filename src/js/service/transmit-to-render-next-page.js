import { loadSelectedTrandingPage } from '../js-partials/tranding-gallery';
import { loadSelectedSearchPage } from '../js-partials/search';
import { galleryContainer } from '../utils/references';
import { onRenderNextPage } from '../markup/render-watched'
import { onRenderNextPageQueue } from '../markup/render-queue';

export async function transmitToRenderNextPage(page) {
    if (galleryContainer.getAttribute('data-set') === 'tranding') {
        await loadSelectedTrandingPage(page);
    }
    if (galleryContainer.getAttribute('data-set') === 'search') {
        await loadSelectedSearchPage(page);
    }
    if (galleryContainer.getAttribute('data-set') === 'watched') {
        await onRenderNextPage(page);
    }

    if (galleryContainer.getAttribute('data-set') === 'queue') {
        await onRenderNextPageQueue(page);
    }
}