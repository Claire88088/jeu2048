class TestGame extends Game {
    constructor() {
        super()
    }

    /* go */
    testGoLeft() {
        this.addPawnToGrid(new Pawn(2, new Position(1, 4), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(2, 3), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(3, 2), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(4, 1), this.gridHtmlElement))
        setTimeout(() => this.movePawnsToLeft(), 1000)
    }

    testGoRight() {
        this.addPawnToGrid(new Pawn(2, new Position(1, 4), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(2, 3), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(3, 2), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(4, 1), this.gridHtmlElement))
        setTimeout(() => this.movePawnsToRight(), 1000)
    }

    testGoTop() {
        this.addPawnToGrid(new Pawn(2, new Position(1, 4), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(2, 3), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(3, 2), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(4, 1), this.gridHtmlElement))
        setTimeout(() => this.movePawnsToTop(), 1000)
    }

    testGoBottom() {
        this.addPawnToGrid(new Pawn(2, new Position(1, 4), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(2, 3), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(3, 2), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(4, 1), this.gridHtmlElement))
        setTimeout(() => this.movePawnsToBottom(), 1000)
    }

    /* merge */
    testMergeLeft() {
        this.addPawnToGrid(new Pawn(2, new Position(1, 1), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(1, 2), this.gridHtmlElement))
        setTimeout(() => this.movePawnsToLeft(), 1000)
    }

    testMergeRight() {
        this.addPawnToGrid(new Pawn(2, new Position(1, 1), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(1, 2), this.gridHtmlElement))
        setTimeout(() => this.movePawnsToRight(), 1000)
    }

    testMergeTop() {
        this.addPawnToGrid(new Pawn(2, new Position(2, 2), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(4, 2), this.gridHtmlElement))
        setTimeout(() => this.movePawnsToTop(), 1000)
    }

    testMergeBottom() {
        this.addPawnToGrid(new Pawn(2, new Position(2, 2), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(3, 2), this.gridHtmlElement))
        setTimeout(() => this.movePawnsToBottom(), 1000)
    }

    /* notmerge */
    testNotMergeLeft() {
        this.addPawnToGrid(new Pawn(4, new Position(1, 1), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(1, 4), this.gridHtmlElement))
        setTimeout(() => this.movePawnsToLeft(), 1000)
    }

    testNotMergeRight() {
        this.addPawnToGrid(new Pawn(4, new Position(1, 1), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(1, 4), this.gridHtmlElement))
        setTimeout(() => this.movePawnsToRight(), 1000)
    }

    testNotMergeTop() {
        this.addPawnToGrid(new Pawn(4, new Position(2, 2), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(3, 2), this.gridHtmlElement))
        setTimeout(() => this.movePawnsToTop(), 1000)
    }

   

    testNotMergeBottom() {
        this.addPawnToGrid(new Pawn(4, new Position(2, 2), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(3, 2), this.gridHtmlElement))
        setTimeout(() => this.movePawnsToBottom(), 1000)
    }

   

    // not merge inverse
    testNotMergeTopInverse() {
        this.addPawnToGrid(new Pawn(2, new Position(2, 2), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(4, new Position(3, 2), this.gridHtmlElement))
        setTimeout(() => this.movePawnsToTop(), 1000)
    }

    testNotMergeBottomInverse() {
        this.addPawnToGrid(new Pawn(2, new Position(2, 2), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(4, new Position(3, 2), this.gridHtmlElement))
        setTimeout(() => this.movePawnsToBottom(), 1000)
    }


    /* merge 3 pawns */
    testMergeLeft3Pawns() {
        this.addPawnToGrid(new Pawn(4, new Position(1, 1), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(1, 2), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(1, 3), this.gridHtmlElement))
        setTimeout(() => this.movePawnsToLeft(), 1000)
    }

    testMergeRight3Pawns() {
        this.addPawnToGrid(new Pawn(2, new Position(1, 1), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(1, 2), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(1, 3), this.gridHtmlElement))
        setTimeout(() => this.movePawnsToRight(), 1000)
    }

    testMergeTop3Pawns() {
        this.addPawnToGrid(new Pawn(2, new Position(2, 2), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(3, 2), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(4, 2), this.gridHtmlElement))
        setTimeout(() => this.movePawnsToTop(), 1000)
    }

    testMergeBottom3Pawns() {
        this.addPawnToGrid(new Pawn(2, new Position(2, 2), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(3, 2), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(4, 2), this.gridHtmlElement))
        setTimeout(() => this.movePawnsToBottom(), 1000)
    }

    /* merge 3 pawns with move*/
    testMergeLeft3PawnsWithMove() {
        this.addPawnToGrid(new Pawn(4, new Position(1, 4), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(1, 2), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(1, 3), this.gridHtmlElement))
        setTimeout(() => this.movePawnsToLeft(), 1000)
    }

    testMergeRight3PawnsWithMove() {
        this.addPawnToGrid(new Pawn(4, new Position(1, 1), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(1, 2), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(1, 3), this.gridHtmlElement))
        setTimeout(() => this.movePawnsToRight(), 1000)
    }

    testMergeTop3PawnsWithMove() {
        this.addPawnToGrid(new Pawn(2, new Position(1, 2), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(2, 2), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(4, 2), this.gridHtmlElement))
        setTimeout(() => this.movePawnsToTop(), 1000)
    }

    testMergeBottom3PawnsWithMove() {
        this.addPawnToGrid(new Pawn(2, new Position(1, 2), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(2, 2), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(4, 2), this.gridHtmlElement))
        setTimeout(() => this.movePawnsToBottom(), 1000)
    }

    /* add pawn after move bottom */
    testAddPawnAfterMoveBottom() {
        this.testGoBottom()
        setTimeout(() => this.addPawnToGrid(new Pawn(2, new Position(1, 2), this.gridHtmlElement)), 2000)
    }

    testBug() {
        this.addPawnToGrid(new Pawn(2, new Position(3, 4), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(4, 2), this.gridHtmlElement))
        setTimeout(() => this.movePawnsToRight(), 1000)
        setTimeout(() => this.addPawnToGrid(new Pawn(2, new Position(3, 2), this.gridHtmlElement)), 2000)
        setTimeout(() => this.movePawnsToBottom(), 3000)
        setTimeout(() => this.addPawnToGrid(new Pawn(2, new Position(3, 2), this.gridHtmlElement)), 4000)
        setTimeout(() => this.movePawnsToLeft(), 5000)
        setTimeout(() => this.addPawnToGrid(new Pawn(2, new Position(3, 2), this.gridHtmlElement)), 6000)
        setTimeout(() => this.movePawnsToBottom(), 7000)
    }

    test2Bug() {
        this.addPawnToGrid(new Pawn(2, new Position(3, 1), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(3, 2), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(4, 1), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(4, new Position(4, 2), this.gridHtmlElement))
        setTimeout(() => this.movePawnsToBottom(), 1000)
    }

    test3BugGoRight() {
        this.addPawnToGrid(new Pawn(2, new Position(3, 1), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(3, 2), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(4, 1), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(4, new Position(4, 2), this.gridHtmlElement))
        setTimeout(() => this.movePawnsToRight(), 1000)
        setTimeout(() => this.movePawnsToBottom(), 2000)
    }

    test3BugGoRightAndTop() {
        this.addPawnToGrid(new Pawn(2, new Position(3, 1), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(3, 2), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(4, 1), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(4, new Position(4, 2), this.gridHtmlElement))
        setTimeout(() => this.movePawnsToRight(), 1000)
        setTimeout(() => this.movePawnsToTop(), 2000)
    }

    test3BugGoLeftAndBottom() {
        this.addPawnToGrid(new Pawn(2, new Position(3, 1), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(3, 2), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(4, 1), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(4, new Position(4, 2), this.gridHtmlElement))
        setTimeout(() => this.movePawnsToLeft(), 1000)
        setTimeout(() => this.movePawnsToBottom(), 2000)
    }

    test3BugGoLeftAndTop() {
        this.addPawnToGrid(new Pawn(2, new Position(3, 1), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(3, 2), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(4, 1), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(4, new Position(4, 2), this.gridHtmlElement))
        setTimeout(() => this.movePawnsToLeft(), 1000)
        setTimeout(() => this.movePawnsToTop(), 2000)
    }

    // false
    testAddAtSamePosition() {
        this.addPawnToGrid(new Pawn(2, new Position(1, 1), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(1, 1), this.gridHtmlElement))
    }

    testMerge3levelPawnsBottom() {
        this.addPawnToGrid(new Pawn(2, new Position(1, 1), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(2, new Position(2, 1), this.gridHtmlElement))
        setTimeout(() => this.movePawnsToBottom(), 1000)
        setTimeout(() => this.addPawnToGrid(new Pawn(2, new Position(1, 1), this.gridHtmlElement)), 2000)
        setTimeout(() => this.addPawnToGrid(new Pawn(2, new Position(2, 1), this.gridHtmlElement)), 2000)
        setTimeout(() => this.movePawnsToBottom(), 3000)
        setTimeout(() => this.movePawnsToBottom(), 4000)
        setTimeout(() => this.addPawnToGrid(new Pawn(2, new Position(1, 1), this.gridHtmlElement)), 5000)
        setTimeout(() => this.addPawnToGrid(new Pawn(2, new Position(2, 1), this.gridHtmlElement)), 5000)
        setTimeout(() => this.movePawnsToBottom(), 6000)
        setTimeout(() => this.addPawnToGrid(new Pawn(2, new Position(1, 1), this.gridHtmlElement)), 7000)
        setTimeout(() => this.addPawnToGrid(new Pawn(2, new Position(2, 1), this.gridHtmlElement)), 7000)
        setTimeout(() => this.movePawnsToBottom(), 8000)
        setTimeout(() => this.movePawnsToBottom(), 9000)
        setTimeout(() => this.movePawnsToBottom(), 10000)
    }

    testMerge3levelPawnsBottom2() {
        this.addPawnToGrid(new Pawn(4, new Position(4, 1), this.gridHtmlElement))
        setTimeout(() => this.addPawnToGrid(new Pawn(2, new Position(1, 1), this.gridHtmlElement)), 1000)
        setTimeout(() => this.addPawnToGrid(new Pawn(2, new Position(2, 1), this.gridHtmlElement)), 1000)
        setTimeout(() => this.movePawnsToBottom(), 2000)
        setTimeout(() => this.movePawnsToBottom(), 3000)
        setTimeout(() => this.addPawnToGrid(new Pawn(2, new Position(1, 1), this.gridHtmlElement)), 4000)
        setTimeout(() => this.addPawnToGrid(new Pawn(2, new Position(2, 1), this.gridHtmlElement)), 4000)
        setTimeout(() => this.movePawnsToBottom(), 5000)
        setTimeout(() => this.addPawnToGrid(new Pawn(2, new Position(1, 1), this.gridHtmlElement)), 6000)
        setTimeout(() => this.addPawnToGrid(new Pawn(2, new Position(2, 1), this.gridHtmlElement)), 6000)
        setTimeout(() => this.movePawnsToBottom(), 7000)
    }

    testMerge3levelPawnsBottom3() {
        this.addPawnToGrid(new Pawn(8, new Position(4, 1), this.gridHtmlElement))
        setTimeout(() => this.addPawnToGrid(new Pawn(2, new Position(1, 1), this.gridHtmlElement)), 1000)
        setTimeout(() => this.addPawnToGrid(new Pawn(2, new Position(2, 1), this.gridHtmlElement)), 1000)
        setTimeout(() => this.movePawnsToBottom(), 2000)
        setTimeout(() => this.movePawnsToBottom(), 3000)
        setTimeout(() => this.addPawnToGrid(new Pawn(2, new Position(1, 1), this.gridHtmlElement)), 4000)
        setTimeout(() => this.addPawnToGrid(new Pawn(2, new Position(2, 1), this.gridHtmlElement)), 4000)
        setTimeout(() => this.movePawnsToBottom(), 5000)
    }

    
    testMerge3levelPawnsBottom4() {
        this.addPawnToGrid(new Pawn(8, new Position(4, 1), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(4, new Position(3, 1), this.gridHtmlElement))
        setTimeout(() => this.addPawnToGrid(new Pawn(2, new Position(1, 1), this.gridHtmlElement)), 1000)
        setTimeout(() => this.addPawnToGrid(new Pawn(2, new Position(2, 1), this.gridHtmlElement)), 1000)
        setTimeout(() => this.movePawnsToBottom(), 2000)
    }

    
    testMerge3levelPawnsLeft() {
        this.addPawnToGrid(new Pawn(8, new Position(4, 1), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(4, new Position(4, 2), this.gridHtmlElement))
        setTimeout(() => this.addPawnToGrid(new Pawn(2, new Position(4, 3), this.gridHtmlElement)), 1000)
        setTimeout(() => this.addPawnToGrid(new Pawn(2, new Position(4, 4), this.gridHtmlElement)), 1000)
        setTimeout(() => this.movePawnsToLeft(), 2000)
        setTimeout(() => this.movePawnsToLeft(), 3000)
        setTimeout(() => this.movePawnsToLeft(), 4000)
    }

    testMerge3levelPawnsRight() {
        this.addPawnToGrid(new Pawn(8, new Position(1, 4), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(4, new Position(1, 3), this.gridHtmlElement))
        setTimeout(() => this.addPawnToGrid(new Pawn(2, new Position(1, 2), this.gridHtmlElement)), 1000)
        setTimeout(() => this.addPawnToGrid(new Pawn(2, new Position(1, 1), this.gridHtmlElement)), 1000)
        setTimeout(() => this.movePawnsToRight(), 2000)
        setTimeout(() => this.movePawnsToRight(), 3000)
        setTimeout(() => this.movePawnsToRight(), 4000)
    }

    testMerge3levelPawnsTop() {
        this.addPawnToGrid(new Pawn(8, new Position(1, 1), this.gridHtmlElement))
        this.addPawnToGrid(new Pawn(4, new Position(2, 1), this.gridHtmlElement))
        setTimeout(() => this.addPawnToGrid(new Pawn(2, new Position(3, 1), this.gridHtmlElement)), 1000)
        setTimeout(() => this.addPawnToGrid(new Pawn(2, new Position(4, 1), this.gridHtmlElement)), 1000)
        setTimeout(() => this.movePawnsToTop(), 2000)
        setTimeout(() => this.movePawnsToTop(), 3000)
        setTimeout(() => this.movePawnsToTop(), 4000)
    }

}
