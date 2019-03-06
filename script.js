var rangeNumber = 17
var crivoArray = []
const crivoWidth = 10
const crivoHeight = rangeNumber / crivoWidth
const numberTable = (crivoWidth * crivoHeight)


function start(){
    createArray()
    mult2()

    console.table(crivoArray)
}


// Create array with variable rangeNumber
function createArray(){
    for (i = 1; i <= numberTable; i++){
        crivoArray[i] = i
    }
}

// Identify multiple 2,3,5,7
function mult2(){
    for (i = 3; i <= numberTable; i++){
        if (((crivoArray[i] = i) % 2) == 0){
            crivoArray[i] = i + " é múltiplo de 2"
        }
    }
}

function mult3(){
    for (i = 4; i <= numberTable; i++){
        if (((crivoArray[i] = i) % 3) == 0){
            crivoArray[i] = i + " é múltiplo de 3"
        }
    }
}

function mult5(){
    for (i = 6; i <= numberTable; i++){
        if (((crivoArray[i] = i) % 5) == 0){
            crivoArray[i] = i + " é múltiplo de 5"
        }
    }
}

function mult7(){
    for (i = 8; i <= numberTable; i++){
        if (((crivoArray[i] = i) % 7) == 0){
            crivoArray[i] = i + " é múltiplo de 7"
        }
    }
}

start()