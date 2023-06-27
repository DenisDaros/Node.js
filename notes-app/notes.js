const fs = require('fs')
const chalk = require('chalk')

const addNotes = (title, body) => {
    const notes = loadNotes()
    // loadNotes essa função trás do arquivo já em formato de objeto o conteúdo do arquivo Json, caso não existir nada lá, será retornado apenas um array vazio
    const duplicateTitle = notes.find((i) => i.title === title)
    // duplicateTitle verifica se já existe algum titulo igual ao recebido por parametro da função

    debugger
    //escrevendo "debugger" dentro do escopo onde eu pretendo debugar no caso addNotes, após isso usar a linha de comando node inspect app.js add --title="b" --body="b" como se eu quisesse adicionar ua nota, a partir dai ir até o browser e entrar por esse endereço chrome://inspect/#devices e a partir dai começar a debuggar clicando o play 

    if(!duplicateTitle){
        notes.push({
            'title':title,
            'body':body 
        })
    // ao passar pela condição de não existir titulos duplicados, é adicionado um objeto nas notas já existentes com os valores recebidos por paramentro 
    saveNotes(notes)
    // saveNotes essa função transforma o parametro recebido em string para que possa ser salva no arquivo JSON 
    console.log(chalk.green.inverse("Nova nota criada!"))
    } else {
        console.log(chalk.red.inverse("Título já existente"))
    }
}

const saveNotes = (notes) => {
    const data = JSON.stringify(notes)
        fs.writeFileSync('notes.json', data)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataString = dataBuffer.toString()
        return JSON.parse(dataString)
    } catch (e) {
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((i) => i.title !== title)
    if(notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Nota removida!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('Nota não encontrada!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green.inverse('Suas Notas...'))
    notes.forEach((i) => console.log(i.title))
    if(notes.length === 0) {
        console.log(chalk.red.inverse('Lista vazia!'))
    }
}

const readNotes = (title) => {
    const notes = loadNotes()
    const notesToRead = notes.find((i) => i.title === title)
    if(notesToRead) {
        console.log(chalk.green.inverse('Nota acessada!'))
        console.log(notesToRead.title)
        console.log(notesToRead.body)
    } else {
        console.log(chalk.red.inverse('Nota não encontrada!'))
    }
}


module.exports = {
    addNotes,
    removeNote,
    listNotes,
    readNotes
}