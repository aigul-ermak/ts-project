import './slider';

import {modals} from '../modals/modals';
import {tabs} from '../modals/tabs';
import {forms} from '../modals/forms';

window.addEventListener('DOMContentLoaded', () => {
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
    forms();
})




