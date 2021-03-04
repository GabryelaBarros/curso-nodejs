let salarioBruto = 100000
let salarioLiquido

function calculaSalario(salarioBruto, callback) {

    let liquido = 0
    const inss = salarioBruto * 0.11
    const vr = salarioBruto* 0.05

    const descontos = inss + vr
    liquido = salarioBruto - descontos

    return callback(liquido)
}


salarioLiquido = calculaSalario(salarioBruto, function(resultado) {

    setTimeout(() => console.log('TimeoutExecutado'), 3000)

    salarioLiquido = resultado
    console.log(`O salário liquido é ${salarioLiquido}`)
})

console.log("Minha mensagem")