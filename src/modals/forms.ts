export const forms = () => {
    const forms: NodeListOf<HTMLElement> = document.querySelectorAll('form'),
        inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input'),
        phoneInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name = "user_phone"]');

    phoneInputs.forEach((phoneInput: HTMLInputElement) => {
        phoneInput.addEventListener('input', () => {
                phoneInput.value = phoneInput.value.replace(/\D/, '')
            }
        )
    })

    const message = {
        loading: 'Loading...',
        success: 'Thank you! We"ll call you soon',
        failure: 'Something wrong...'
    }
//вот тут приходит data - с разных форм - какой тип
    const postData = async (url: string, data: any) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: 'POST',
            body: data
        })
        return await res.text();
    }

    const clearInputs = () => {
        inputs.forEach((input: any) => {
            input.value = ''
        })
    }

    forms.forEach((form: HTMLFormElement) => {
        form.addEventListener('submit', (e: KeyboardEvent) => {
            e.preventDefault()
        })
        let statusMessage = document.createElement('div');
        statusMessage.classList.add('status')
        form.appendChild(statusMessage)

        const formData = new FormData(form);

        postData('assets/server.php', formData)
            .then(res => {
                console.log(res)
            })
            .catch(() => statusMessage.textContent = message.failure)
            .finally(() => {
                clearInputs();
                setTimeout(() => {
                    statusMessage.remove()
                }, 5000)
            })
    })


}
