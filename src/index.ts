import sayMyName from "./01-process/useProcess" //Exercicio 01
import createFile from './02-manipulateFiles/file' //Exercicio 02
import startServer from './03-criandoServer/server'


//execute o exercicio desejado
const express =  require('express')

//Instancia o express
const app = express()

//cria rotas
app.get('/', (req:any, res:any) => {
    res.send('<h1>Minha lista de tarefas esta sem concluir</h1>')
})

app.get('/json', (req:any, res:any)=> {
    res.json({title: "tarefa x", done: 'True'})
})

//starta o servidor
app.listen(3000, () => {
    console.log('%c Servidor Iniciado', 'color:red')
})