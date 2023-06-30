class Alerte {
    constructor(value, parentHtmlElement) {
        this.value = value
        
        this.alerteHtmlElement = this.createAlerteHtmlElement()        
        parentHtmlElement.appendChild(this.alerteHtmlElement)
    }

    /**
     * Créé un élément HTML correspondant  à l'alerte
     * @returns <div> élément HTML 
     */
    createAlerteHtmlElement() {
        const divElement = document.createElement('div')
        divElement.classList.add('alerte')
        divElement.innerText = this.value
        divElement.style.animation = 'appear 1s both'

        return divElement
    }   
}