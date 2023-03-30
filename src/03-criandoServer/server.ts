const http = require('http')

const server = http.createServer((req:any, res:any) => {
    console.log(req.method) //o navegador que manda isso quando ta ativo o server
    console.log(req.url) //esta foi a url usada pelo navegador para mandar a req
    res.statusCode = 404; //aparece em network no inspect do browser
    res.end("<h1>Hello World</h1>") // Corpo da resposta para o body da pagina
})

const startServer = ():any => {
    server.listen(3000, () => {
        console.log("%c Servidor Ativo!", "color:red")
    })
}

export default startServer

