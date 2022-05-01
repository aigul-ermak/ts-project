export const timer = (id: string, deadline: string) => {
    const addZero = (num: number) => {
        if (num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    };

    const getTimeRemaining = (endtime: string) => {
        // @ts-ignore
        const t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000 * 60 * 60)) % 24),
            days = Math.floor((t/(1000 * 60 * 60 * 24)));

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    const setClock = (selector: string, endtime: string) => {
        const timer = document.querySelector(selector),
            days: HTMLElement = timer.querySelector("#days"),
            hours = timer.querySelector("#hours"),
            minutes = timer.querySelector("#minutes"),
            seconds = timer.querySelector("#seconds"),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.textContent = <string>addZero(t.days);
            hours.textContent = <string>addZero(t.hours);
            minutes.textContent = <string>addZero(t.minutes);
            seconds.textContent = <string>addZero(t.seconds);

            if (t.total <= 0) {
                days.textContent = "00";
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";

                clearInterval(timeInterval);
            }
        }
    };
    setClock(id, deadline);
};
