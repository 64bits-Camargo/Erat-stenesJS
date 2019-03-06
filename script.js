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

// Identify multiple of two
function mult2(){
    for (i = 1; i <= numberTable; i++){
        if (((crivoArray[i] = i) % 2) == 0){
            crivoArray[i] = i + " é múltiplo de 2"
        }
    }
}

start()