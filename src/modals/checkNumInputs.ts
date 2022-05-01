export const checkNumInputs = (selector: string) => {
    const numInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(selector)
    numInputs.forEach(numInput => {
        numInput.addEventListener('input', () => {
                numInput.value = numInput.value.replace(/\D/, '')
            }
        )
    })
}
