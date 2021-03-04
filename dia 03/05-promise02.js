const { rejects } = require("assert")
const { promises } = require("fs")
const { resolve } = require("path")

const weAreLearning = 'java'


// function whatAreWeLearningCallback(onSuccessCallback, onErrorCallback) {
//     if(weAreLearning != 'nodejs' && weAreLearning != 'javascript') {
//         onErrorCallback({
//             name: "This is wrong",
//             message: weAreLearning + '? Really!?'
//         })
//     }
//     else {
//         onSuccessCallback({
//             name: weAreLearning,
//             message: 'That is so cool!!'
//         })
//     }
// }

// whatAreWeLearningCallback((result) => {
//     console.log(result.name + '? Yeah!' + result.message)
// }, (error) => {
//     console.log(error.name, error.message)
// })


function whatAreWeLearningCallback(language){
    return new Promise((resolve, reject) => {
        if(language === 'nodejs' || language === 'javascript') {
            resolve({
                    name: language,
                    message: 'That is so cool!!'
            }) //é tipo o onSucessCallback
        }
        else {
            reject({
                name: 'This is wrong',
                message: language + '? Really!?'
            }) //é tipo onErrorCallback
        }
    })
}

whatAreWeLearningCallback(weAreLearning)
    .then(result => console.log(result.name + '? Yeah!' + result.message) )
    .catch(error => console.log( error.name, error.message))
    .finally(() => console.log("FINALMENTE ACABOU"))




console.log('oooooo')