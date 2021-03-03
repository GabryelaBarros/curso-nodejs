let lista = [1, 2, 5]
let listaIncluir = [3, 4]


let arrResult = []

for (let index = 0; index < lista.length; index++) {
    const element = array[index];
    arrResult.push(element)  
}

for (let index = 0; index < listaIncluir.length; index++) {
    const element = array[index];
    arrResult.push(element)
}


const result = [...lista, ...arrResult]

const result