const fetch = require('node-fetch')
function getPerson(id){
  fetch(`http://swapi.dev/api/people/${id}`)
  .then(response => response.json())
  .then(person => {
      const { homeworld, films, vehicles, species, starships} = person
      const promises = []

      promises.push(fetchSWApi(homeworld, false))
      const fetchFilms = fetchSWApi(films, true)
      //console.log(fetchFilms.)
      promises.push(...fetchFilms)
      
      //if(vehicles > 0) promises.push(fetchSWApi(...vehicles, true))
      //if(species > 0) promises.push(fetchSWApi(...species, true))
      //if(starships > 0) promises.push(fetchSWApi(...starships, true))
      
        
      Promise.all(promises)
        .then(results => {
          person.homeworld = results[0].name
          person.films = results[1]
        })

  })
  .catch(err => console.log(err))
}


const fetchSWApi = async (url, multiples) => {
  if(url) {
    if(url.length > 0 &&  multiples == true) {     
      const requests = url.map(element => fetch(element).then(response => response.json()).then(json => json))
      return requests
    }
    else {
      return fetch(url)
        .then(response => response.json())
        .then(json => json);
    }
  }
  
}

getPerson(1)