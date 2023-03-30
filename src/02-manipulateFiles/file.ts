const fs = require('fs')

const createFile = ():any => {
    fs.writeFile('zEx-02-CriandoArquivo.txt', "Olá nodeJS, primeiro texto criado", (err:any) => {
        if(err) console.log("DESCRIÇÃO DO NOSSO ERRO: \n" + err)
    })
}

// fs.appendFile() adiciona ao arquivo ja existente (name, content, err)
// fs.wirteFile() sobreescreve todo o arquivo (name, content, err)
// fs.rename() renomeia o arquivo ja existente (nameBefore, nameAfter, err)
//fs.unlink() remove arquivo (nameFile, err)
// __dirname é o caminho pro diretorio atual onde o Node esta

export default createFile
