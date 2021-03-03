const mesesAno = ['janeiro', 'fevereiro', 'março', 'abril',
'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 
'novembro']

mesesAno.push('dezembro')

const filterMeses = mesesAno.filter((mes) => mes.substr(0,1) === 'j')
const findMeses = mesesAno.find((mes) => mes.substr(0,2) === 'ju')

const mapaMeses = mesesAno.map((mes) => {
    if(mes.substr(mes.length-1, 1) === 'o')
    return{
        mes,
        length: mes.length
    }
})


console.log(filterMeses)
console.log(findMeses)

console.log(mapaMeses)
