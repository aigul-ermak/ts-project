import './slider';

import {modals, tabs, forms,changeModalState, timer } from '../modals';

window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    const modalState = {};
    const deadline = '2022-05-09';

    changeModalState(modalState);
    modals();
    tabs({
        headerSelector: '.glazing_slider',
        tabSelector: '.glazing_block',
        contentSelector: '.glazing_content',
        activeSelector: 'active'
    });
    tabs({
        headerSelector: '.decoration_slider',
        tabSelector: '.no_click',
        contentSelector: '.decoration_content > div > div',
        activeSelector: 'after_click'
    });
    tabs({
        headerSelector: '.balcon_icons',
        tabSelector: '.balcon_icons_img',
        contentSelector: '.big_img > img',
        activeSelector: 'do_image_more',
        display: 'inline-block'
    });
    forms(modalState);
    timer('.container1', deadline);
})




