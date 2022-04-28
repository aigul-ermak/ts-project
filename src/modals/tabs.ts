type tabsType = {
    headerSelector: string
    tabSelector: string
    contentSelector: string
    activeSelector: string
    display?: string
}

export const tabs = ({headerSelector, tabSelector, contentSelector, activeSelector, display = 'block'}: tabsType) => {
    const header: HTMLElement = document.querySelector(headerSelector),
        tabs: NodeListOf<HTMLElement> = document.querySelectorAll(tabSelector),
        content: NodeListOf<HTMLElement> = document.querySelectorAll(contentSelector)

    const hideTabContent = () => {
        content.forEach((tab: HTMLElement) => {
            tab.style.display = 'none';
            tabs.forEach((tab: HTMLElement) => {
                tab.classList.remove(activeSelector);
            });
        });
    };

    const showTabContent = (i: number = 0) => {
        content[i].style.display = display;
        tabs[i].classList.add(activeSelector);
    };

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e: any) => {
        const isTabPressed = e.keyCode === 9 || e.keyCode === 'Tab'
        const target = e.target as Element;
        if (!isTabPressed) {
            return;
        }

        if (target.classList.contains(tabSelector.replace(/\./, ''))
            || (target.parentNode as Element).classList.contains(tabSelector.replace(/\./, ''))) {
            tabs.forEach((tab: HTMLElement, i: number) => {
                if (target == tab || target.parentNode == tab) {
                    hideTabContent();
                    showTabContent(i);
                }
                //не знаю как связать по кнопке таб
                if (e.shiftKey) {
                    showTabContent(i);
                }
            });
        }
    });
};

