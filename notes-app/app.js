const yargs = require('yargs')
const notes = require('./notes.js')

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
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
    }
})

// Create remove command
// node app.js remove --title="lista supermercado"
yargs.command({
    command: 'remove',
    describe: 'Remove uma nota',
    builder: {
        title: {
            describe: 'Nota titulo',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command
// node app.js list
yargs.command({
    command: 'list',
    describe: 'lista as notas',
    handler() {
        console.log('Listando todas as notas')
    }
})

// Create read command
// node app.js read
yargs.command({
    command: 'read',
    describe: 'lê as notas',
    handler() {
        console.log('Lendo a nota')
    }
})

yargs.parse()
// Em resumo, yargs.parse() é a função que inicia o processo de análise dos argumentos de linha de comando com base nas configurações definidas com o Yargs. Ela coleta, valida e executa a lógica correspondente aos comandos e opções fornecidos, permitindo que você crie aplicativos Node.js interativos e flexíveis que aceitam argumentos da linha de comando de maneira fácil e consistente.