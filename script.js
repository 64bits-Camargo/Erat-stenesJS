var rangeNumber = 20
const crivoArray = []
const crivoWidth = 10
const crivoHeight = rangeNumber / crivoWidth


function start(){
    createTable()
    renderCrivo()
}

function createTable(){
 const numberTable = crivoWidth * crivoHeight

    for (i = 0; i < numberTable; i++){
        crivoArray[i] = i
    }
}

function mult2(){
    for (i = 1; i <= numberTable; i++){
        if (((crivoArray[i] = i) % 2) == 0){
            crivoArray[i] = i + " é múltiplo de 2"
        }

function renderCrivo(){
    html = '<table cellpadding=0 cellspacing=0>'

    for (row = 0; row < crivoHeight; row++){
        html += '<tr>'

        for (column = 0; column < crivoWidth; column++){
            const tableIndex = column + (crivoWidth * row)

            

            html += '<td>'
            html += tableIndex+1
            html += '</td>'
        }
        
        html += '</tr>'
    }

    html += '</table>'

    document.querySelector('#crivoCanvas').innerHTML = html
}

start()