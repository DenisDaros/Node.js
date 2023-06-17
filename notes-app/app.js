const chalk = require('chalk')
const getNotes = require('./notes.js')

const command = process.argv[2]

//terminal: node app.js add || remove
//terminal: node app.js add --title="things to buy"

if (command === 'add') {
    console.log('adicionando notas!')
} else if(command === 'remove') {
    console.log('removendo notas!')
}
console.log(process.argv)