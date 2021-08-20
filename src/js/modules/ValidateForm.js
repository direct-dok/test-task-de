import {
    getDomElement,
    checkThereElementInDom,
    deleteElem,
    addClass,
    removeClass
} from "../utils/functions"
import {
    messageError
} from "../utils/functionsError"

class ValidateForm {

    selectorForm = null
    selectorFields = null
    validateError = false

    constructor(selectorForm, selectorFields) {
        this.selectorForm = selectorForm
        this.selectorFields = selectorFields
    }

    getAllFields() {
        this.validateError = false
        getDomElement(this.selectorForm)
            .querySelectorAll(this.selectorFields)
            .forEach(el => {
                this.checkForEmptiness(el)
                el.name === 'name' ? this.checkLengthField(el, 2) : false
                el.name === 'email' ? this.checkEmailValidity(el) : false
            })
    }

    checkForEmptiness(field) {

        checkThereElementInDom(field.parentNode, '.message-error') ? deleteElem(field.parentNode, '.message-error') : false

        if (!field.value) {
            field.parentNode.insertAdjacentHTML('beforeend', messageError('The field must not be empty'))
            addClass(field, 'border-red')
            this.validateError = true
        } else {
            removeClass(field, 'border-red')
        }

    }

    checkLengthField(field, minimumLength) {

        checkThereElementInDom(field.parentNode, '.message-error') ? deleteElem(field.parentNode, '.message-error') : false

        if(field.value.length < minimumLength) {
            field.parentNode.insertAdjacentHTML('beforeend', messageError(`The name cannot be less than ${minimumLength} characters`))
            addClass(field, 'border-red')
            this.validateError = true
        } else {
            removeClass(field, 'border-red')
        }

    }

    checkEmailValidity(field) {

        checkThereElementInDom(field.parentNode, '.message-error') ? deleteElem(field.parentNode, '.message-error') : false
        const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if(field.value.match(pattern)) {
            removeClass(field, 'border-red')
        } else {
            addClass(field, 'border-red')
            field.parentNode.insertAdjacentHTML('beforeend', messageError('You entered an email address in the wrong format. Correct format "email@domain.com"'))
            this.validateError = true
        }

    }

}

export default ValidateForm