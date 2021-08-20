import Overlay from "./Overlay"
import { addListener } from '../utils/functions'

class Modal {

    objSettings = null
    appendElemSelector = null
    overlayObj = null

    constructor(objSettings, appendElemSelector) {
        this.objSettings = objSettings
        this.appendElemSelector = appendElemSelector
    }

    createModal() {

        return `
            <div class="modal">
                <div class="modal__wrapper">
                    <h2 class="modal__title">${this.objSettings.title}</h2>
                    <p class="modal__text">${this.objSettings.textContent}</p>
                    <div class="modal__button-wrapper">
                        <button class="modal__button">${this.objSettings.textButton}</button>
                    </div>
                </div>
                <div class="modal__close-icon message-form__close-icon-wrapper"></div>
            </div>
        `

    }

    renderModal() {

        this.overlayObj = new Overlay('.modal', '.render-overlay')
        this.overlayObj.showOverlay()
        const appendElem = document.querySelector(this.appendElemSelector)
        appendElem.insertAdjacentHTML('beforeend', this.createModal())

        this.addListenerModal()

    }

    addListenerModal() {

        addListener('.modal__close-icon', 'click', this.removeModal, this)
        addListener('.modal__button', 'click', this.removeModal, this)

    }

    removeModal() {
        this.overlayObj.removeOverlay()
    }

}

export default Modal