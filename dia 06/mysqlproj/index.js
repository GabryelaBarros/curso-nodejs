const mysql = require('mysql')


const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'development',
    database: 'cursonodejs'
})


// con.connect((err) => {
//     if(err) throw err

//     con.query("SELECT * from cidades", (err, result, fields) => {
//         if (err) throw err

//         console.log(result)
//         con.end()
//     })

// })


const cidade = 'santos'

const sqlStatement = `
    SELECT p.nome, c.nome as cidade, c.estado 
    FROM pessoas p 
    INNER JOIN cidades c on c.id = p.cidade
    WHERE c.nome = "${cidade}"
`

con.connect((err) => {
    if(err) throw err


    con.query(sqlStatement, (err, result, fields) => {
        if(err) throw err
        console.log(result[0])
        con.end()
    })

})