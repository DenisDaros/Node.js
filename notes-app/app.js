const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// node app.js --help para acessar os comandos implementados pela biblioteca "yargs"

// Create add command
// node app.js add
yargs.command({
    command: 'add',
    describe: 'Adiciona uma nota',
    handler: function () {
        console.log('Adicionando uma nota')
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
