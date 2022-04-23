import './slider';
import modals from '../modals/modals';
import tabs from '../modals/tabs';


window.addEventListener('DOMContentLoaded', () => {
    modals()
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active')
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
})




