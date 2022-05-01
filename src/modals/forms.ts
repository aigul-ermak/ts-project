import {checkNumInputs} from './checkNumInputs';

export const forms = (state: any) => {
    const forms: NodeListOf<HTMLElement> = document.querySelectorAll('form'),
        inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input');

    checkNumInputs('input[name = "user_phone"]');

    const message = {
        loading: 'Loading...',
        success: 'Thank you! We"ll call you soon',
        failure: 'Something wrong...'
    };
//могу поставить data: any? так как не знаю в каком формате
    const postData = async (url: string, data: any) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: 'POST',
            body: data
        })
        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach((input: HTMLInputElement) => {
            input.value = ''
        })
    };

    forms.forEach((form: HTMLFormElement) => {
        form.addEventListener('submit', (e: KeyboardEvent) => {
            e.preventDefault()
        })
        let statusMessage = document.createElement('div');
        statusMessage.classList.add('status')
        form.appendChild(statusMessage)

        const formData = new FormData(form);

        if (form.getAttribute('data-calc') === 'end') {
            for (let key in state) {
              formData.append(key, state[key])           }
        }

        postData('assets/server.php', formData)
            .then(res => {
                console.log(res)
                statusMessage.textContent = message.success
            })
            .catch(() => statusMessage.textContent = message.failure)
            .finally(() => {
                clearInputs();
                setTimeout(() => {
                    statusMessage.remove()
                }, 5000)
            })
    });
};
