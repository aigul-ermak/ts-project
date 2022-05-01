import {checkNumInputs} from './checkNumInputs';

// export type stateType = {
//     form: number
//     width: number
//     height: number
//     type: string
//     profile: string
// }

type bindActionToElem = {
    event: string
    elems: NodeList
    prop: string
}
//не знаю как типизировать state
export const changeModalState = (state: any) => {
    const windowForms: NodeListOf<HTMLElement> = document.querySelectorAll('.balcon_icons_img'),
        windowWidth: NodeListOf<HTMLElement> = document.querySelectorAll('#width'),
        windowHeight: NodeListOf<HTMLElement> = document.querySelectorAll('#height'),
        windowType: NodeListOf<HTMLElement> = document.querySelectorAll('#view_type'),
        windowProfile: NodeListOf<HTMLElement> = document.querySelectorAll('.checkbox')

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionToElems({event, elems, prop}: bindActionToElem) {
        elems.forEach((elem: any, i: number) => {
                elem.addEventListener(event, () => {
                    switch (elem.nodeName) {
                        case 'SPAN' :
                            state[prop] = i
                            break
                        case 'INPUT' :
                            if(elem.type =='radio')  {
                                state[prop] = elem.value ? elem.checked : elem
                            }
                           else {
                                state[prop] = elem.value;
                            }
                            break;
                        case 'SELECT' :
                            state[prop] = elem.value;
                            break;
                    }
                    console.log(state);
                })
            }
        )
    }

    windowForms.forEach((windowForm, i) => {
        windowForm.addEventListener('click', () => {
            state.form = (i);
        })
    });



    bindActionToElems({
        event: 'click',
        elems: windowForms,
        prop: 'form'
    });
    bindActionToElems({
        event: 'input',
        elems: windowWidth,
        prop: 'width'
    });
    bindActionToElems({
        event: 'input',
        elems: windowHeight,
        prop: 'height'
    });
    bindActionToElems({
        event: 'change',
        elems: windowType,
        prop: 'type'
    });
    bindActionToElems({
        event: 'change',
        elems: windowProfile,
        prop: 'profile'
    });
};
