const tabs = (headerSelector: any, tabSelector: any, contentSelector: any, activeSelector: any) => {
    const header: any = document.querySelector(headerSelector),
        tab: any = document.querySelectorAll(tabSelector),
        content: any = document.querySelectorAll(contentSelector)

    function hideTabContent() {
        content.forEach((item: HTMLElement) => {
            item.style.display = 'none'
            tab.forEach((item: HTMLElement) => {
                item.classList.remove(activeSelector)
            })
        })
    }

    function showTabContent(i: number = 0) {
        content[i].style.display = 'block'
        tab[i].classList.add(activeSelector)
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e: any) => {
        const target = e.target;
        if (target.classList.contains(tabSelector.replace(/\./, ''))
            || target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
            tab.forEach((item: HTMLElement, i: number) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i)
                }
            })
        }
    })
}


export default tabs;
