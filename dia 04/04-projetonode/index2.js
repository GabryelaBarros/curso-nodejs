const fetch = require('node-fetch')

async function getPerson(id){
    const response = await fetch(`https://swapi.dev/api/people/${id}`)
    const luke = await response.json()
    

    console.log(luke)
        
}
getPerson(1)