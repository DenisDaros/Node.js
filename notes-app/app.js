const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// node app.js --help para acessar os comandos implementados pela biblioteca "yargs"

// Create add command
// node app.js add --title="lista supermercado" --body="arroz"
yargs.command({
    command: 'add',
    describe: 'Adiciona uma nota',
    builder: {
        title: {
            describe: 'Nota titulo',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Nota Corpo',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function (argv) {
        console.log('Title:', argv.title)
        console.log('Note:', argv.body)
    }
})

// Create remove command
// node app.js remove
yargs.command({
    command: 'remove',
    describe: 'Remove uma nota',
    handler: function () {
        console.log('Removendo uma nota')
    }
})

// Create list command
// node app.js list
yargs.command({
    command: 'list',
    describe: 'lista as notas',
    handler: function () {
        console.log('Listando todas as notas')
    }
})

// Create read command
// node app.js read
yargs.command({
    command: 'read',
    describe: 'lê as notas',
    handler: function () {
        console.log('Lendo a nota')
    }
})

yargs.parse()
// Em resumo, yargs.parse() é a função que inicia o processo de análise dos argumentos de linha de comando com base nas configurações definidas com o Yargs. Ela coleta, valida e executa a lógica correspondente aos comandos e opções fornecidos, permitindo que você crie aplicativos Node.js interativos e flexíveis que aceitam argumentos da linha de comando de maneira fácil e consistente.