
test = false
// test = true // pour effectuer des tests
let game = ''

if (!test) {
    game = new Game()
    game.startGame()
}
else {
    game = new TestGame()
    // game.testGoLeft()
    // game.testMergeLeft()
    // game.testNotMergeLeft()
    // game.testMergeLeft3Pawns()
    // game.testMergeLeft3PawnsWithMove()

    // game.testGoRight()
    // game.testMergeRight()
    // game.testNotMergeRight()
    // game.testMergeRight3Pawns()
    // game.testMergeRight3PawnsWithMove()

    // game.testGoTop()
    // game.testMergeTop()
    // game.testNotMergeTop()
    // game.testNotMergeTopInverse()
    // game.testMergeTop3Pawns()
    // game.testMergeTop3PawnsWithMove()

    // game.testGoBottom()
    // game.testMergeBottom()
    // game.testNotMergeBottom() 
    // game.testNotMergeBottomInverse() 
    // game.testMergeBottom3Pawns()
    // game.testMergeBottom3PawnsWithMove()

    // game.testAddPawnAfterMoveBottom()
    // game.test3BugGoRight()   //=> OK
    // game.test3BugGoLeftAndBottom()  
    // game.test3BugGoLeftAndTop() //=> OK
    // game.test3BugGoRightAndTop() 

    // game.testAddAtSamePosition() // => KO
    game.testMerge3levelPawnsBottom()
    // game.testMerge3levelPawnsBottom2() // 
    // game.testMerge3levelPawnsBottom3() 
    // game.testMerge3levelPawnsBottom4() 
    // game.testMerge3levelPawnsLeft() // OK
    // game.testMerge3levelPawnsRight() 
    // game.testMerge3levelPawnsTop() // OK
}


function clickTop() { 
    game.clickTop()
}

function clickBottom() { 
    game.clickBottom()
}

function clickLeft() { 
    game.clickLeft()
}

function clickRight() { 
    game.clickRight()
}