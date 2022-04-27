export const modals = () => {

    type bindModalType = {
        triggersSelector: string
        modalSelector: string
        closeSelector: string
    }

    const bindModal = ({triggersSelector, modalSelector, closeSelector}: bindModalType) => {
        const triggers: NodeListOf<HTMLElement> = document.querySelectorAll(triggersSelector),
            modal: HTMLElement = document.querySelector<HTMLElement>(modalSelector),
            close: HTMLElement = document.querySelector<HTMLElement>(closeSelector);

        const closeModal = (modalProperty: string, documentProperty: string) => {
            modal.style.display = modalProperty;
            document.body.style.overflow = documentProperty;
        }

        triggers.forEach((trigger: HTMLElement) => {
            trigger.addEventListener('click', (e: KeyboardEvent) => {
                if (e.target) {
                    e.preventDefault()
                }
                closeModal('block', 'hidden')
            })
        });

        close.addEventListener('click', () => closeModal('none', ''));

        modal.addEventListener('click', (e: KeyboardEvent) => {
            if (e.target === modal) {
                closeModal('none', '')
            }
        });
    };

    const showModalByTime = (selector: string, time: number) => {
        setTimeout(function () {
            document.querySelector<HTMLElement>(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
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

    // showModalByTime('.popup', 3000)
}
