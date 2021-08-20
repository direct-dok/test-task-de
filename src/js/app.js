import ControlForm from './modules/ControlForm'
import Overlay from './modules/Overlay'

const buttonLetsTalk = document.querySelector('.footer__button')

buttonLetsTalk.addEventListener('click', () => {
    
    const form = new ControlForm(
        [
            {
                tagLabel: "Full Name", 
                attrFor: "name", 
                tagField: "input", 
                typeField: "text", 
                fieldName: "name",
                placeholder: "Your name"
            }, 
            {
                tagLabel: "Email", 
                attrFor: "mail", 
                tagField: "input", 
                typeField: "text",
                fieldName: "email",
                placeholder: "Your email"
            },
            {
                tagLabel: "Message", 
                attrFor: "name", 
                tagField: "textarea", 
                typeField: "text",
                fieldName: "message",
                placeholder: "Your message"
            }
        ], 
        "Send us Message",
        "Submit", 
        ".render-form",
        ".message-form", 
        ".message-form__filed-form"
    )

    const overlay = new Overlay('.message-form', '.render-overlay')

    form.renderForm()
    overlay.showOverlay()
})


