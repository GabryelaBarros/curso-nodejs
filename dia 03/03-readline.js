const readline = require('readline')

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const leitor2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question("Qual é o modulo para ler dados em node.js\n", (resposta) => {
    const minhaResposta = resposta
    console.log(`Minha resposta foi ${minhaResposta}`)
    leitor.close()
})


leitor2.question("Qual é o modulo para ler dados em node.js LLLKASAJIODSAIJSADIJASDJSDI\n", (resposta) => {
    const minhaResposta = resposta
    console.log(`Minha resposta foi ${minhaResposta}`)
    leitor2.close()
})
