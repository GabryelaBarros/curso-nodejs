// function sumNumbers() {
//     let result = 1 + 1

//     if(result == 2){
//         success()
//     }
//     else {
//         error()
//     }
// }

// const success = () => {
//     console.log("Yeah! the result is 2")
// }

// const error = () => { 
//     console.log("Oopps! Something wrong!")
// }

// sumNumbers()


let myProsise = new Promise((resolve, reject) => {
    let result = 1 + 2

    if(result == 2){
        resolve("Yeah! the result is 2")
    }
    else {
        reject("Oopps! Something wrong!")
    }
})

myProsise
    .then(msgSuccess => console.log(msgSuccess))
    .catch(msgError => console.log(msgError))

