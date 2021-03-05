
async function getPersonByName(name){

    const response = await sqlQuery()
    return response
}


getPersonByName('Luke')
    .then(result => console.log(result))
console.log([1,2,3,4,5,6])
//console.log(result)


async function sqlQuery() {
    return {
        name: 'Luke Skywalker',
        weapon: 'Light Saber'
    }
}