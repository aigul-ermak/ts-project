import './slider';

import {modals} from '../modals/modals';
import {tabs} from '../modals/tabs';
import {forms} from '../modals/forms';
import {changeModalState} from '../modals/changeModalState';

window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    let modalState = {};

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

})




