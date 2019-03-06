var rangeNumber = 17
var crivoArray = []
const crivoWidth = 10
const crivoHeight = rangeNumber / crivoWidth
const numberTable = (crivoWidth * crivoHeight)


function start(){
    createTable()
    mult2()

    console.table(crivoArray)
}

function createTable(){
    for (i = 1; i <= numberTable; i++){
        crivoArray[i] = i
    }
}

function mult2(){
    for (i = 1; i <= numberTable; i++){
        if (((crivoArray[i] = i) % 2) == 0){
            crivoArray[i] = i + " é múltiplo de 2"
        }
    }
}

start()