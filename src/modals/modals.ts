type bindModalType = {
    triggersSelector: string
    modalSelector: string
    closeSelector: string
    closeClickOverlay?: boolean
};

export const modals = () => {

    const bindModal = ({
                           triggersSelector,
                           modalSelector,
                           closeSelector,
                           closeClickOverlay = true,
                       }: bindModalType) => {
        const triggers: NodeListOf<HTMLElement> = document.querySelectorAll(triggersSelector),
            modal: HTMLElement = document.querySelector<HTMLElement>(modalSelector),
            close: HTMLElement = document.querySelector<HTMLElement>(closeSelector),
            windows: NodeListOf<HTMLElement> = document.querySelectorAll('[data-modal]')

        windows.forEach(window => window.style.display = 'none');

        const closeModal = (modalProperty: string, documentProperty: string) => {
            modal.style.display = modalProperty;
            document.body.style.overflow = documentProperty;

        }

        triggers.forEach((trigger: HTMLElement) => {

            trigger.addEventListener('click', (e: KeyboardEvent) => {

                if (e.target) {
                    e.preventDefault();
                }
                closeModal('block', 'hidden');
                 //этот код не работает
                if (document.querySelector(`${modalSelector}.input:not([type = 'radio'])`) ) {
                    document.querySelector<HTMLInputElement>(`${modalSelector}.input:not([type = 'radio'])`).focus();
                }
            });
        });

        close.addEventListener('click', () => closeModal('none', ''));

        modal.addEventListener('click', (e: KeyboardEvent) => {
            if (e.target === modal && closeClickOverlay) {
                closeModal('none', '');
            }
        });
        //закрытие модального окна при нажатии на esc
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape') {
                closeModal('none', '');
            }
        });
    };

    const showModalByTime = (selector: string, time: number) => {
        setTimeout(() => {
            document.querySelector<HTMLElement>(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time)
    };

    bindModal({
        triggersSelector: '.popup_engineer_btn',
        modalSelector: '.popup_engineer',
        closeSelector: '.popup_engineer .popup_close'
    });
    bindModal({
        triggersSelector: '.phone_link',
        modalSelector: '.popup', closeSelector: '.popup .popup_close'
    });
    bindModal({
        triggersSelector: '.popup_calc_btn',
        modalSelector: '.popup_calc',
        closeSelector: '.popup_calc_close'
    });
    bindModal({
        triggersSelector: '.popup_calc_button',
        modalSelector: '.popup_calc_profile',
        closeSelector: '.popup_calc_profile_close',
        closeClickOverlay: false,
    });
    bindModal({
        triggersSelector: '.popup_calc_profile_button',
        modalSelector: '.popup_calc_end',
        closeSelector: '.popup_calc_end_close',
        closeClickOverlay: false,
    });
    // showModalByTime('.popup', 3000)
};
