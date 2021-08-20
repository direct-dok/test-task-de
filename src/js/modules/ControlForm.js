import { addListener, getDomElement, addListenerToGroupElements } from "../utils/functions"
import Form from './Form'
import ValidateForm from "./ValidateForm"
import Modal from './Modal'

class ControlForm extends Form {

    elementSelectorToInsert = null
    selectorForm = null
    selectorFieldsForm
    validateForm = null

    constructor(settingsForm, titleForm, textButtonSubmit, elementSelectorToInsert, selectorForm, selectorFieldsForm) {

        super(settingsForm, titleForm, textButtonSubmit)

        this.elementSelectorToInsert = elementSelectorToInsert
        this.selectorForm = selectorForm
        this.selectorFieldsForm = selectorFieldsForm
        this.validateForm = new ValidateForm(this.selectorForm, this.selectorFieldsForm)

    }

    renderForm() {

        const appendElem = document.querySelector(this.elementSelectorToInsert)
        appendElem.insertAdjacentHTML('afterbegin', this.createForm())
        addListener('.message-form__close-icon-wrapper', 'click', this.removeForm, this)
        addListener('.message-form', 'submit', this.sendForm, this)
        addListenerToGroupElements(this.selectorFieldsForm, 'blur', this.fieldNameValidation, this)
        addListenerToGroupElements(this.selectorFieldsForm, 'blur', this.fieldInputValidation, this)

    }

    removeForm() {

        getDomElement('.message-form').remove()
        getDomElement('.overlay').remove()
        document.body.classList.remove('overflow-hidden')

    }

    fieldNameValidation(e) {

        const fieldElem = e.target
        fieldElem.name === 'name' ? this.validateForm.checkLengthField(fieldElem, 2) : false

    }

    fieldInputValidation(e) {
        
        const fieldElem = e.target
        fieldElem.name === 'email' ? this.validateForm.checkEmailValidity(fieldElem) : false
    }

    async sendForm(e) {

        e.preventDefault()
        this.validateForm.getAllFields()
        !this.validateForm.validateError ? await this.fetchUrl() : false

    }

    async fetchUrl() {

        const getData = await fetch('https://content.guardianapis.com/search?api-key=2a9caa79-c72e-412c-bb6f-9958ad4a75fe')
        const result = await getData.json()
        this.showModal(result)

        return result
    }

    showModal(responseStatus) {

        if(responseStatus.response.status === 'ok') {
            const modal = new Modal(
                {
                    title: "Message delivered", 
                    textContent: "Thank you for your interest in our company. We have received a message and will definitely reply to it within 15 minutes. Please wait",
                    textButton: "OK"
                }, 
                '.render-modal'
            )
            this.removeForm()
            modal.renderModal()
        }

    }


}

export default ControlForm