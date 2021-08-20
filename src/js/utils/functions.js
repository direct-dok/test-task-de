export function addListener(selectorElem, event, callBack, context = null) {
    const domElement = document.querySelector(selectorElem)
    domElement.addEventListener(event, callBack.bind(context))
}

export function addListenerToGroupElements(selectorElems, event, callBack, context = null) {
    const domElements = document.querySelectorAll(selectorElems)
    domElements.forEach(el => el.addEventListener(event, callBack.bind(context)))
}

export function getDomElement(elemSelector) {
    return document.querySelector(elemSelector)
}

export function checkThereElementInDom(elemWrapper, selectorElem) {
    return elemWrapper.querySelector(selectorElem)
}

export function deleteElem(elemWrapper, selectorElem) {
    elemWrapper.querySelector(selectorElem).remove()
}

export function addClass(domElem, className) {
    domElem.classList.add(className)
}

export function removeClass(domElem, className) {
    domElem.classList.remove(className)
}