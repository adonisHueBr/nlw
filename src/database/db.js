const sqlite3 = require("sqlite3").verbose()

//iniciar um objeto que ira fazer operaçoes no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
//utilizar o objeto do banco de dados pra nossa aplicaçoes
//db.serialize(() => {
//     //com comandos SQL vou :
//     //criar tabela 
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)


//     //inserir dados na tabela 
//     const query = `
//     INSERT INTO places (
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items
//     ) VALUES ( ?, ?, ?, ?, ?, ?, ? );
// `

// const values = [
//     "https://images.unsplash.com/photo-1516992654410-9309d4587e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
//     "Paperside",
//     "Guilherme Gambala , Jardim America",
//     "numero 123",
//     "Santa Catarina",
//     "Rio Sul",
//     "Residduos eletronicos e lampadas"
// ]

//     function afterInsertData(err){
//         if (err){
//             return console.log(err)
//         }
//         console.log("cadastrado com sucesso")
//         console.log(this)
//     }
//     db.run(query,values,afterInsertData)

    //3 consultar os dados da tabela
    //db.all(`SELECT * FROM places`, function(err,rows){
    //  if (err){
    //    return console.log(err)
    //}
    // console.log("Aqui estao seus registros")
    //console.log(rows)
//    })



    //4 deletar um dado da tabela

   // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
    //    if (err){
    //      return console.log(err)
    //}
    //    console.log("registro deletado")
    //})


    
//})