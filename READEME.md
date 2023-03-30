# TO RUN TYPESCRIPT ON NODE 
    • para converter arquivos TS para JS:
         - Via terminal no diretorio: tsc file.ts | node file.js
    • ou instale suporte para ts + node:
         - Via terminal no diretorio: npm install -g ts-node
         - chamada: ts-node file.ts

## TYPESCRIPT + NODEJS

    1- VOCÊ PRECISA DO EXPRESS:
     - npm i express

    2- VOCÊ TAMBÉM PRECISA DOS PACOTES @types , são extensoes de pacotes ja existentes no  NPM para suporte a TypeScript
     - npm i -D @types/express
     - npm i -D @types/node

    3- VOCÊ TAMBÉM PRECISA DO ts-node PARA LER ARQUIVOS NO NODE DIRETO DO FORMATO DE ARQUIVO .TS (No meu caso ja estou usando de forma global na maquina)
     - porem pode usar local no diretorio: npm i -D ts-node

    4- POR FIM VOCÊ PRECISA DO NODEMON: este por sua vez tem a finalidade de monitorar todas alterações nos arquivos e aplicar e reiniciar altomaticamente o servidor quando for necessario.
     - npm i -D nodemon
 
 ## CONFIGURAÇÃO TS + NODEJS

    NO PACKAGE.JSON

    "scripts": {
        "start:dev": "nodemon", // Inicia nosso servidor com nodemon 
        "build": "npx tsc" // Builda nosso projeto para Javascript
    }

    NA PASTA RAIZ

    1- CRIE O ARQUIVO .gitignore, onde vamos ignorar a pasta "node_modules" dos commits
     - dentro do arquivo crie o comando: /node_module
    
    2- CRIE O ARQUIVO tsconfig.json, onde ficaram armazenados nossas configs do TS, nele insira:

     {
        "compilerOptions": {
            "target": "es5",                          
            "module": "commonjs",                    
            "lib": ["es6"],                     
            "allowJs": true,
            "outDir": "build",                          
            "rootDir": "src",
            "strict": true,         
            "noImplicitAny": true,
            "esModuleInterop": true,
            "resolveJsonModule": true
        }
     }
    
    3- CRIE O ARQUIVO nodemon.json, ´W nele que a magica do auto reload acontece.
     configure o seguite:

     {
        "watch": ["src"],
        "ext": ".ts,.js",
        "ignore": [],
        "exec": "ts-node ./src/index.ts"
     }
