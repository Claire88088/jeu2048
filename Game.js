class Game {
    constructor() {
        this.pawnsInGameNumber = 0 // permet de gérer la fin du jeu => si = 16 (nb de cases de la grille)
        this.gridHtmlElement = document.getElementsByClassName('grid')[0]
        
        this.gridSize = 4
        this.gridIndexMin = 1 // TODO : voir à changer le nom
        this.gridIndexMax = this.gridSize
        this.maxPawnsNumber = this.gridSize * this.gridSize
        this.gameGrid = this.createGameGrid()

        this.availablePositions = this.createAvailablePositionsArray()

        this.maxPawnValue = 2 // valeur min
        this.pawnsMerged = []
        this.previousPawn = undefined  // pion déjà présent sur la ligne => permet de gérer les "fusions" de pions 
        this.previousPawnsNumberOnCurrentRowOrCol = 0
        this.nextPawnsNumberOnCurrentRowOrCol = 0
        this.pawnsNumberOnCurrentRow = 0
    }

    /**
    * création de la grille de jeu (4*4) qui contiendra les pions
    * @returns Array<Array<Pawn || undefined>>
    */
    createGameGrid() {
        /* 
            tableau à 2 dimensions qui contiendra des Pawn => 4 rows
            ajout d'une case supplémentaire pour gérer plus facilement les indices des lignes (index = 1 et pas 0) et des colonnes
            => car au niveau du grid CSS les indices partent de 1 ! 
        */
        const indexGridSize = this.gridSize + 1
        const gameGrid = new Array(indexGridSize)
        for (let row = 1; row < indexGridSize; row++) {
            gameGrid[row] = new Array(indexGridSize) 
            for (let col = 1; col < indexGridSize; col++) {
                gameGrid[row][col] = null
            }
        }
        return gameGrid
    }

    /**
     * création d'un tableau avec les positions "libres"
     * @returns Array<Position> tableau de positions "libres"
     */
    createAvailablePositionsArray() {
        const availablePositions = new Array()
        for (let row = 1; row < 5; row ++) {
            for (let col = 1; col < 5; col ++) {
                availablePositions.push(new Position(row, col))
            }
        }
        return availablePositions
    }

    /********* gestion du jeu *****************************/
    startGame() {
        // ajout des 2 pions de départ de valeur 2
        // TODO : ajouter la valeur aléatoire 2 ou 4 pour l'ajout des autres pions
        this.addNewPawnWithRandomPositionAndValue2Or4()
        this.addNewPawnWithRandomPositionAndValue2Or4()
    }

    addNewPawnWithRandomPositionAndValue2Or4() {
        const randomValue2Or4 = this.getRandomValue2Or4()
        this.addNewPawnAtRandomAvailablePosition(randomValue2Or4)
    }

    getRandomValue2Or4() {
        let value = this.getRandomArbitrary(1,3)
        if (value == 1) 
            value = 4
        return value
    }

    /**
     * Renvoie un entier aléatoire entre une valeur min (incluse) et une valeur max (exclue)
     * @param {number} min entier
     * @param {number} max entier
     * @returns number entier aléatoire 
     */
    getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }

    /**
     * ajout d'un nouveau pion (valeur aléatoire 2 ou 4) à une position libre au hasard
     * @param {number} value valeur du pion 
     */
    addNewPawnAtRandomAvailablePosition(value) {
        const availablePosition = this.getRandomAvailablePosition()
        const newPawn = new Pawn(value, availablePosition, this.gridHtmlElement)
        this.addPawnToGrid(newPawn)
    }

    /**
     * renvoie une position aléatoire parmi les positions possibles
     * @returns Position 
     */
    getRandomAvailablePosition() {
        let nbOfAvailablePositions = this.availablePositions.length
        if (nbOfAvailablePositions != 0) {
            const index = this.getRandomArbitrary(0, nbOfAvailablePositions)
            return this.availablePositions[index]
        } else {
            console.error('Plus de place pour ajouter un pion')
        }
    }

    

    addPawnToGrid(pawn) {
        this.gameGrid[pawn.position.row][pawn.position.col] = pawn
        this.removeAvailablePositionToAvailableArray(pawn.position)
        this.pawnsInGameNumber ++
    }

    removeAvailablePositionToAvailableArray(position) {
        this.availablePositions = this.availablePositions.filter(item => item.row != position.row || item.col != position.col)
    }

    
    /*** left */
    clickLeft() {
        this.movePawnsToLeft()
        this.endGameOrContinue()
    }

    movePawnsToLeft() {
        this.gameGrid.forEach((row, indexRow) => {
            this.pawnsNumberOnCurrentRow = this.getPawnsNumberOnRow(indexRow)

            if (this.pawnsNumberOnCurrentRow != 0) {
                this.nextPawnsNumberOnCurrentRowOrCol = this.pawnsNumberOnCurrentRow
                row.forEach((currentPawn, indexCol) => {
                    if (currentPawn) {
                        if ((!this.havePreviousPawn() && !this.isTheFirstPawnLeft(currentPawn))
                            || (this.havePreviousPawn() && this.previousPawn.hasMerged())
                            || (this.havePreviousPawn() && !this.previousPawn.hasMerged() && !this.havePawnsSameValue(this.previousPawn, currentPawn)
                            )) {
                            const indexColToMoveTo = this.previousPawnsNumberOnCurrentRowOrCol + this.gridIndexMin
                            this.movePawn(currentPawn, new Position(indexRow, indexColToMoveTo))
                            this.previousPawn = currentPawn
                        } else if (this.havePreviousPawn()){
                            this.mergePawns(this.previousPawn, currentPawn)
                            this.previousPawnsNumberOnCurrentRowOrCol --
                        } else {
                            this.previousPawn = currentPawn
                        }
                        this.previousPawnsNumberOnCurrentRowOrCol ++
                    }
                })
                this.resetRowOrCol()
            }
        })
    }

    /**
     * renvoie le nombre de pions sur la ligne passée en paramètre
     * @param {number} indexRow numéro de ligne
     * @returns number nombre de pions sur la même ligne
     */
    getPawnsNumberOnRow(indexRow) {
        const row = this.gameGrid[indexRow]
        let pawnsOnRowNumber = 0
        row.forEach((col) => {
            if (col !== null) {
                pawnsOnRowNumber ++
            }
        })
        return pawnsOnRowNumber
    }

    havePreviousPawn() {
        return this.previousPawn !== undefined
    }

    isTheFirstPawnLeft(pawn) {
        return pawn.position.col === this.gridIndexMin
    }

    havePawnsSameValue(pawn1, pawn2) {
        return pawn1.value == pawn2.value
    }

    movePawn(pawn, newPosition) {
        this.removePawnFromGrid(pawn)
        pawn.updatePosition(newPosition)
        this.addPawnToGrid(pawn)
    }

    removePawnFromGrid(pawn) {
        this.gameGrid[pawn.position.row][pawn.position.col] = null
        this.addAvailablePositionToAvailableArray(pawn.position)
        this.pawnsInGameNumber --
    }

    addAvailablePositionToAvailableArray(position) {
        this.availablePositions.push(position)
    }

    /**
     * fusionne 2 pions
     * @param {Pawn} previousPawn pion précédent sur la ligne / colonne
     * @param {Pawn} currentPawn 
     */
    mergePawns(previousPawn, currentPawn) {
        this.deletePawn(currentPawn)
        const newValue = previousPawn.value *= 2
        previousPawn.updateValue(newValue)
        previousPawn.setIsMerged(true)
        this.addPawnToPawsMergedArray(previousPawn)
        this.resetMaxPawnValue(newValue)
    }

    /**
     * Supprime un pion du jeu
     * @param {Pawn} pawn 
     */
    deletePawn(pawn) {
        this.removePawnFromGrid(pawn)
        pawn.removePawnHtmlElementFromGrid(this.gridHtmlElement)
        pawn = null
    }

    addPawnToPawsMergedArray(pawn) {
        this.pawnsMerged.push(pawn)
    }

    resetMaxPawnValue(newValue) {
        if (this.maxPawnValue < newValue) 
            this.maxPawnValue = newValue
    }

    resetRowOrCol() {
        this.previousPawn = undefined
        this.previousPawnsNumberOnCurrentRowOrCol = 0
        this.nextPawnsNumberOnCurrentRowOrCol = 0
        this.resetAllPawnsMerged()
    }

    resetAllPawnsMerged() {
        this.pawnsMerged.forEach(pawn => {
            pawn.resetMerged()
        })
        this.pawnsMerged = []
    }

    endGameOrContinue() {
        if (this.isGameOver()) {
            const alerteHtmlElement = new Alerte('Fin de la partie', document.getElementsByClassName('info')[0])
        } else {
            setTimeout(() => this.addNewPawnWithRandomPositionAndValue2Or4(), 300)
        }
    }

    isGameOver() {
        // return (this.maxPawnValue == 2048) || (this.pawnsInGameNumber >= this.maxPawnsNumber)
        return (this.maxPawnValue == 8) || (this.pawnsInGameNumber >= this.maxPawnsNumber)
    }




    /***** right */
    clickRight() {
        this.movePawnsToRight()
        this.endGameOrContinue()
    }
    
    movePawnsToRight() {
        this.gameGrid.forEach((row, indexRow) => {
            this.pawnsNumberOnCurrentRow = this.getPawnsNumberOnRow(indexRow)
            if (this.pawnsNumberOnCurrentRow != 0) {
                // on boucle en partant de la fin (attention : jusqu'à l'indice 1)
                for (let i = row.length - 1; i > 0; i--) {
                    const currentPawn = row[i]
                    if (currentPawn) {
                        if ((!this.havePreviousPawn() && !this.isTheFirstPawnRight(currentPawn))
                            || (this.havePreviousPawn() && this.previousPawn.hasMerged())
                            || (this.havePreviousPawn() && !this.previousPawn.hasMerged() && !this.havePawnsSameValue(this.previousPawn, currentPawn)
                            )) {
                            const indexColToMoveTo = this.gridIndexMax - this.nextPawnsNumberOnCurrentRowOrCol
                            this.movePawn(currentPawn, new Position(indexRow, indexColToMoveTo))
                            this.previousPawn = currentPawn
                        } else if (this.havePreviousPawn()){
                            this.mergePawns(this.previousPawn, currentPawn)
                            this.nextPawnsNumberOnCurrentRowOrCol -- 
                        } else {
                            this.previousPawn = currentPawn
                        }
                        this.nextPawnsNumberOnCurrentRowOrCol ++
                    }
                }
                this.resetRowOrCol()
            }
        })
    }

    isTheFirstPawnRight(pawn) {
        return pawn.position.col === this.gridSize
    }


    /*** top */
    clickTop() {
        this.movePawnsToTop()
        this.endGameOrContinue()
    }

    movePawnsToTop() {
        /* il faut parcourir la grille colonne par colonne et pas ligne par ligne
            or on a un arrayLignes(arrayColonnes, arrayColonnes) */
        const gameGridByColumns = this.transposeArray2D(this.gameGrid)

        gameGridByColumns.forEach((col, indexCol) => {
            // this.pawnsNumberOnCurrentCol = this.getPawnsNumberOnCol(indexCol)
            // if (this.pawnsNumberOnCurrentCol == 0) 
            //     return
            
            col.forEach((currentPawn, indexRow) => {
                if (currentPawn) {
                    if ((!this.havePreviousPawn() && !this.isTheFirstPawnTop(currentPawn))
                        || (this.havePreviousPawn() && this.previousPawn.hasMerged())
                        || (this.havePreviousPawn() && !this.previousPawn.hasMerged() && !this.havePawnsSameValue(this.previousPawn, currentPawn)
                        )) {
                        const indexRowToMoveTo = this.previousPawnsNumberOnCurrentRowOrCol + this.gridIndexMin
                        this.movePawn(currentPawn, new Position(indexRowToMoveTo, indexCol))
                        this.previousPawn = currentPawn
                    } else if (this.havePreviousPawn()){
                        this.mergePawns(this.previousPawn, currentPawn)
                        this.previousPawnsNumberOnCurrentRowOrCol --
                    } else {
                        this.previousPawn = currentPawn
                    }
                    this.previousPawnsNumberOnCurrentRowOrCol ++
                }
            })
            this.resetRowOrCol()
        })
    }
 
    /**
     * transpose un tableau à 2 dimensions (c'est-à-dire en JS : un tableau de tableaux)
     * @param {} array 
     * @returns array transposé 
     */
    transposeArray2D(array) {
        return array.map((row, indexRow) => array.map((col, indexCol) => array[indexCol][indexRow]))
    }
    
    isTheFirstPawnTop(pawn) {
        return pawn.position.row === this.gridIndexMin
    }

    /** bottom */
    clickBottom() {
        this.movePawnsToBottom()
        this.endGameOrContinue()
    }

    movePawnsToBottom() {
        /* il faut parcourir la grille colonne par colonne et pas ligne par ligne
            or on a un arrayLignes(arrayColonnes, arrayColonnes) */
        const gameGridByColumns = this.transposeArray2D(this.gameGrid)

        gameGridByColumns.forEach((col, indexCol) => {
            //TODO
             // this.pawnsNumberOnCurrentCol = this.getPawnsNumberOnCol(indexCol)
            // if (this.pawnsNumberOnCurrentCol == 0) 
            //     return

            // on boucle en partant de la fin (attention : jusqu'à l'indice 1)
            for (let i = col.length - 1; i > 0; i--) {
                const currentPawn = col[i]
                if (currentPawn) {
                    if ((!this.havePreviousPawn() && !this.isTheFirstPawnBottom(currentPawn))
                        || (this.havePreviousPawn() && this.previousPawn.hasMerged())
                        || (this.havePreviousPawn() && !this.previousPawn.hasMerged() && !this.havePawnsSameValue(this.previousPawn, currentPawn)
                        )) {
                        const indexRowToMoveTo = this.gridIndexMax - this.nextPawnsNumberOnCurrentRowOrCol
                        this.movePawn(currentPawn, new Position(indexRowToMoveTo, indexCol))
                        this.previousPawn = currentPawn
                    } else if (this.havePreviousPawn()){
                        this.mergePawns(this.previousPawn, currentPawn)
                        this.nextPawnsNumberOnCurrentRowOrCol -- 
                    } else {
                        this.previousPawn = currentPawn
                    }
                    this.nextPawnsNumberOnCurrentRowOrCol ++
                }
            }
            this.resetRowOrCol()
        })
    }

    isTheFirstPawnBottom(pawn) {
        return pawn.position.row === this.gridSize
    }


    



// TODO

    /**
     * renvoie le nombre de pions sur la colonne passée en paramètre
     * @param {number} indexCol 
     * @returns number nombre de pions sur la même colonne
     */
    getPawnsNumberOnCol(indexCol) {
        const gameGridByColumns = this.transposeArray2D(this.gameGrid)
        const col = gameGridByColumns[indexCol]
        let pawnsOnColNumber = 0

        col.forEach((row) => {
            if (row !== null) {
                pawnsOnColNumber ++
            }
        })
        return pawnsOnColNumber
    }
}