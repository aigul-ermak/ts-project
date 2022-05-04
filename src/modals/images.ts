export const images = () => {
    const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage=document.querySelector('img')

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);
    imgPopup.appendChild(bigImage)

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    workSection.addEventListener('click', (e: KeyboardEvent) => {
        e.preventDefault();
        const target = e.target as Element;

        if(target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = (target.parentNode as HTMLElement).getAttribute('href');
            bigImage.setAttribute('src', path)
        }

        if( target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
        }
    })
}
