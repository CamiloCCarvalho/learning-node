const dayJs = require("dayjs")
// biblioteca nativa do NODE - Process ja esta ativa por padrão com TS

const sayMyName = ():void => {
    console.log(process.argv) // terminal usa stdout por padrão
    console.log(dayJs().format('DD/MM/YYYY'))
    console.log("\n")
    process.stdout.write("qual seu nome?\n") //echo
    process.stdin.on('data', (keyboard) => { //get
        process.stdout.write(`Texto do usuário: ${keyboard}`)
        process.exit() //precisa do exit para sair se não ele continua pedindo pra digita texto
    })
}

export default sayMyName