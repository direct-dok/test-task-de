import {
    addListener,
    getDomElement
} from "../utils/functions"

class Overlay {

    htmlCodeOverlay = `<div class="overlay"></div>`
    selectorFormRemovedOnClose = null
    selectorElemRenderOverlay = null

    constructor(selectorFormRemovedOnClose, selectorElemRenderOverlay) {

        this.selectorFormRemovedOnClose = selectorFormRemovedOnClose
        this.selectorElemRenderOverlay = selectorElemRenderOverlay

    }

    showOverlay() {

        const elem = document.querySelector(this.selectorElemRenderOverlay)
        elem.insertAdjacentHTML('beforeend', this.htmlCodeOverlay);

        addListener('.overlay', 'click', this.removeOverlay, this)
        document.body.classList.add('overflow-hidden')

    }

    removeOverlay() {

        getDomElement('.overlay').remove()
        getDomElement(this.selectorFormRemovedOnClose).remove()
        document.body.classList.remove('overflow-hidden')
    }

}

export default Overlay