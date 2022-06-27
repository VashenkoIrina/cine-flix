import { loadTrandingPage } from '../js-partials/tranding-gallery.js';
import {
  paginationList,
  navHome,
  headerTitle,
  headerLogo,
  logoutBtn,
  navLibrary,
  openModalFilm,
  watchedBtn,
  queueBtn,
  leftBtn,
  rightBtn,
} from '../utils/references';
import { onPaginationBtnClick } from '../js-partials/pagination-btn-click';
import { onClickHomePage } from '../js-partials/tranding-gallery';
import { clickButWatched } from '../service/header-library-click';
import { clickButQueue } from '../service/header-queue-click';
import { openModal } from '../js-partials/open-modal';
import { onResize } from '../utils/pagination-resize';

import { logOut } from '../service/login';
import { setMyLibraryStyles } from '../markup/header-library';
import { onLeftButtonClick } from '../js-partials/pagination-arrows';
import { onRightButtonClick } from '../js-partials/pagination-arrows';

addEventListener('DOMContentLoaded', () => {
  loadTrandingPage();
});

paginationList.addEventListener('click', onPaginationBtnClick);

navHome.addEventListener('click', onClickHomePage);
headerTitle.addEventListener('click', onClickHomePage);
headerLogo.addEventListener('click', onClickHomePage);
openModalFilm.addEventListener('click', openModal);
window.addEventListener('resize', onResize);

navLibrary.addEventListener('click', setMyLibraryStyles);
watchedBtn.addEventListener('click', clickButWatched);
queueBtn.addEventListener('click', clickButQueue);
logoutBtn.addEventListener('click', logOut);
leftBtn.addEventListener('click', onLeftButtonClick);
rightBtn.addEventListener('click', onRightButtonClick);

