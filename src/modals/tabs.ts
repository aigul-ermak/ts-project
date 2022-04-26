type tabsType = {
    headerSelector: string
    tabSelector: string
    contentSelector: string
    activeSelector: string
}

export const tabs = ({headerSelector, tabSelector, contentSelector, activeSelector}: tabsType) => {
    const header: HTMLElement = document.querySelector(headerSelector),
        tabs: NodeListOf<HTMLElement> = document.querySelectorAll(tabSelector),
        content: NodeListOf<HTMLElement> = document.querySelectorAll(contentSelector)
//
    const hideTabContent = () => {
        content.forEach((tab: HTMLElement) => {
            tab.style.display = 'none';
            tabs.forEach((tab: HTMLElement) => {
                tab.classList.remove(activeSelector);
            });
        });
    };

    const showTabContent = (i: number = 0) => {
        content[i].style.display = 'block';
        tabs[i].classList.add(activeSelector);
    };

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e: any) => {
        const target = e.target;
        if (target.classList.contains(tabSelector.replace(/\./, ''))
            || target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
            tabs.forEach((tab: HTMLElement, i: number) => {
                if (target == tab || target.parentNode == tab) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};



