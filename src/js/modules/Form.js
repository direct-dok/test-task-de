class Form {

    settingsForm = null
    titleForm = null
    textButtonSubmit = null

    constructor(settingsForm, titleForm, textButtonSubmit) {
        this.settingsForm = settingsForm
        this.titleForm = titleForm
        this.textButtonSubmit = textButtonSubmit
    }

    createForm() {
        return `
            <form class="message-form">
                <div class="message-form__title">${this.titleForm}</div>
                <ul class="message-form__field-items">
                    ${this.generateFields().join('')}
                </ul>
                <div class="message-form__submit-wrapper">
                    <button class="message-form__button">${this.textButtonSubmit}</button>
                </div>
                <div class="message-form__close-icon-wrapper"></div>
            </form>
        `
    }

    generateFields() {
        return this.settingsForm.map((el) => {
            if(el.tagField === 'input') return this.createInput(el)
            if(el.tagField === 'textarea') return this.createTextarea(el)
        })
    }

    createInput(objSettings) {
        return `<li class="message-form__field-item"><label for='${objSettings.attrFor}' class='message-form__label'>${objSettings.tagLabel}:</label><input type='${objSettings.typeField}' class='message-form__filed-form message-form__field-name' name='${objSettings.fieldName}' placeholder='${objSettings.placeholder}'></li>`
    }

    createTextarea(objSettings) {
        return `<li class="message-form__field-item"><label for='${objSettings.attrFor}' class='message-form__label'>${objSettings.tagLabel}:</label><textarea id='msg' class='message-form__filed-form message-form__field-message' name='${objSettings.fieldName}' placeholder='${objSettings.placeholder}'></textarea></li>`
    }

}

export default Form