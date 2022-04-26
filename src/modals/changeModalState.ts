import {checkNumInputs} from './checkNumInputs';
import {populateDependencyGraph} from 'ts-loader/dist/utils';

type bindActionToElem = {
    event: string
    elem: any
    prop: string
}

export const changeModalState = (state: any) => {
    const windowForms: NodeListOf<HTMLElement> = document.querySelectorAll('.balcon_icons_img'),
        windowWidth: NodeListOf<HTMLElement> = document.querySelectorAll('#width'),
        windowHeight: NodeListOf<HTMLElement> = document.querySelectorAll('#height'),
        windowType: NodeListOf<HTMLElement> = document.querySelectorAll('#view_type'),
        windowProfile: NodeListOf<HTMLElement> = document.querySelectorAll('.checkbox')

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionToElems({event, elems, prop}: any) {
        elems.forEach((elem: HTMLInputElement, i: HTMLElement) => {
                elem.addEventListener(event, () => {
                    switch (elem.nodeName) {
                        case 'SPAN' :
                            state[prop] = i
                            break
                        case 'INPUT' :
                            if (elem.getAttribute('type') === 'checkbox') {
                                // @ts-ignore
                                i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
                            } else {
                                elems.forEach((box: any, j: any) => {
                                    elem.checked = false;
                                    if (i == j) {
                                        box.Checked = true
                                    }
                                })
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

    console.log(state)

    windowForms.forEach((windowForm, i) => {
        windowForm.addEventListener('click', () => {
            state.form = (i)
            // console.log(state)
        })
    })


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
}
