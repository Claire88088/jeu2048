class Pawn {
    static idNumber = 0
    static backgroundColors = []
       
    constructor(value, position, gridHtmlElement) {
        // mise à jour de l'id du pion
        Pawn.idNumber ++
        this.id = Pawn.idNumber
        
        this.position = position
        this.value = value
        this.isMerged = false // permet de gérer si le pion peut fusionner ou pas (une seule fusion possible par tour)

        Pawn.backgroundColors[2] = 'orange'
        Pawn.backgroundColors[4] = 'blue'
        Pawn.backgroundColors[8] = 'green'
        Pawn.backgroundColors[16] = 'yellow'
        Pawn.backgroundColors[32] = 'pink'
        Pawn.backgroundColors[46] = 'red'

        // affichage
        this.pawnHtmlElement = this.createPawnHtmlElement()        
        gridHtmlElement.appendChild(this.pawnHtmlElement)
    }

    /**
     * Créé un élément HTML correspondant au pion
     * @returns <div> élément HTML 
     */
    createPawnHtmlElement() {
        const divElement = document.createElement('div')
        divElement.id = this.id
        divElement.classList.add('pawn')
        divElement.innerText = this.value
        divElement.style.backgroundColor = Pawn.backgroundColors[`${this.value}`]
        /* la position du pion au niveau de la grille Html se fait via le style de l'élément 
        => grid-area: indexRow / indexCol / span 1 / span 1; 
        */
        divElement.style.gridArea = `${this.position.row}/${this.position.col}/span 1/span 1`
        divElement.style.animation = 'appear 1s both'

        return divElement
    }

    hasMerged() {
        return this.isMerged
    }

    updatePosition(newPosition) {
        this.position = newPosition
        this.updateDisplay()
    }
    
    /**
     * Met à jour l'élément HTML du pion (gestion de l'affichage)
     */
    updateDisplay() {
        this.pawnHtmlElement.innerText = this.value
        this.pawnHtmlElement.style.gridArea = `${this.position.row}/${this.position.col}/span 1/span 1`
        this.pawnHtmlElement.style.backgroundColor = Pawn.backgroundColors[`${this.value}`]
    }

    updateValue(newValue) {
        if (newValue !== undefined)
            this.value = newValue
        this.updateDisplay()
    }

    setIsMerged(value) {
        this.isMerged = value
    }

    resetMerged() {
        this.isMerged = false
    }

    /**
     * Retire l'élément Html représentant de pion de la grille CSS
     * @param {*} gridHtmlElement 
     */
    removePawnHtmlElementFromGrid(gridHtmlElement) {
        const pawnElement = document.getElementById(this.id)
        gridHtmlElement.removeChild(pawnElement)
    }

  






   
}