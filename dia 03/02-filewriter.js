const fs = require('fs')

const texto = "Curso de Node.js blablabla"

const file = fs.writeFile('./curso.txt', texto, () => {
    console.log("ESCRITA CONCLUIDA")
})