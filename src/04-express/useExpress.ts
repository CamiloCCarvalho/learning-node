const express =  require('express')

//Instancia o express
const app = express()

//cria rotas
app.get('/', (req:any, res:any) => {
    res.send('<h1>Minha lista de tarefas</h1>')
})


//starta o servidor
app.listen(3000, () => {
    console.log('%c Servidor Iniciado', 'color:red')
})