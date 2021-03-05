const fs = require('fs')

// const fileContent = fs.readFile(__filename, (err, data) => {
//     if(!err) console.log(String(data)) 
// })

const util = require('util')

readFilePromise(__filename)
    .then((data) => console.log(String(data)))
    .catch((err) => console.log(err))