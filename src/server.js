const express = require("express")
const server = express()

//pegar o banco de dados 
const db = require("./database/db.js")

// configurar pasta public
server.use(express.static("public"))


//habilitar o uso do re.body
server.use(express.urlencoded({ extended: true }))
//utilizando template engine nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    nonCache: true
})


//configurar caminhos 
//pagina inicial
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {
    //rew. query : query strings da nossa url
    // console.log(req.query)

    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {

    //req.body : o corpo do nosso formulario
    // console.log(req.body)

    //inserir dados 
    const query = `
         INSERT INTO places (
         image,
         name,
         address,
         address2,
         state,
         city,
         items
       ) VALUES ( ?, ?, ?, ?, ?, ?, ? );
     `

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items

    ]

    function afterInsertData(err) {
        if (err) {
            return console.log(err)
        }
        console.log("cadastrado com sucesso")
        console.log(this)

        return res.render("create-point.html", {saved: true})
    }
    db.run(query, values, afterInsertData)
    
})

server.get("/search-result", (req, res) => {

    const search = req.query.search

    if(search == ""){
        //pesquisa vazia
        return res.render("search-result.html", {total: 0 })
    }



    //pegar os dados do banco de dados 
    db.all(`SELECT * FROM places WHERE city LIKE %'${search}'% `, function (err, rows) {
        if (err) {
            return console.log(err)
            return res.send("Erro no cadastro")
        }
        const total = rows.length
        //mostrar a pagina html com os dados do db que estao na propriedade places
        return res.render("search-result.html", { places: rows, total: total })
    })

})

//ligar o servidor
server.listen(3000)