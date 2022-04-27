export const timer = (id: number, deadline: any) => {
    const getTimeRemaining = (endTime: Date) => {
        // @ts-ignore
        const t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            days = Math.floor((t / 1000 * 60 * 60 * 24));

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }

    const setClock = (selector: any, endTime: any) => {

        const addZero = (num: number) => {
            if(num <= 9) {
                return '0' + num;
            } else {
                return num
            }
        }

        const timer = document.querySelector(selector),
            days: HTMLElement = document.querySelector('#days'),
            hours = document.querySelector('#hours'),
            minutes = document.querySelector('#minutes'),
            seconds = document.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);
        updateClock ();

        function  updateClock () {
            const t = getTimeRemaining(endTime),
            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if(t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock(id: number, deadline: any)
}
