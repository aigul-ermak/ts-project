const modals = () => {
    //type?
    function bindModal(triggerSelector: any, modalSelector: any, closeSelector: any) {
    //type?
        const trigger: any = document.querySelectorAll(triggerSelector),
            modal: HTMLElement = document.querySelector(modalSelector),
            close: HTMLElement = document.querySelector(closeSelector)

        trigger.forEach((item: HTMLElement) => {
            item.addEventListener('click', (e: KeyboardEvent) => {
                if (e.target) {
                    e.preventDefault()
                }
                modal.style.display = 'block'
                document.body.style.overflow = 'hidden';
            })
        })

        close.addEventListener('click', () => {
            modal.style.display = 'none'
            document.body.style.overflow = '';
        })

        modal.addEventListener('click', (e: KeyboardEvent) => {
            if (e.target === modal) {
                modal.style.display = 'none'
                document.body.style.overflow = '';
                // document.body.classList.add('.modal-open')
            }
        })
    }
    //type of selector?
    function showModalByTime(selector: any, time: number) {
        setTimeout(function () {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time)
    }

    bindModal('.popup_engineer_btn',
        '.popup_engineer',
        '.popup_engineer .popup_close');

    bindModal('.phone_link', '.popup', '.popup .popup_close')

    // showModalByTime('.popup', 3000)
}

export default modals;
