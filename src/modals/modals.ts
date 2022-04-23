const modals = () => {
    function bindModal(triggerSelector: any, modalSelector: any, closeSelector: any) {

        const trigger: any = document.querySelectorAll(triggerSelector),
            modal: any = document.querySelector(modalSelector),
            close: any = document.querySelector(closeSelector)

        trigger.forEach((item: any) => {
            item.addEventListener('click', (e: any) => {
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

        modal.addEventListener('click', (e: any) => {
            if (e.target === modal) {
                modal.style.display = 'none'
                document.body.style.overflow = '';
                // document.body.classList.add('.modal-open')
            }
        })
    }

    function showModalByTime(selector: any, time: any) {
        setTimeout(function () {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time)
    }

    bindModal('.popup_engineer_btn',
        '.popup_engineer',
        '.popup_engineer .popup_close');

    bindModal('.phone_link', '.popup', '.popup .popup_close')

    showModalByTime('.popup', 3000)
}

export default modals;
