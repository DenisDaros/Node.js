const fs = require('fs')

const getNotes = function () {
    return 'Your notes...'
}

const addNotes = function (title, body) {
    const notes = loadNotes()
    // loadNotes essa função trás do arquivo já em formato de objeto o conteúdo do arquivo Json, caso não existir nada lá, será retornado apenas um array vazio
    const duplicateTitle = notes.filter((i) => i.title === title)
    // duplicateTitle verifica se já existe algum titulo igual ao recebido por parametro da função
    
    if(duplicateTitle.length === 0){
        notes.push({
            'title':title,
            'body':body 
        })
    // ao passar pela condição de não existir titulos duplicados, é adicionado um objeto nas notas já existentes com os valores recebidos por paramentro 
    saveNotes(notes)
    // saveNotes essa função transforma o parametro recebido em string para que possa ser salva no arquivo JSON 
    console.log("Nova nota criada!")
    } else {
        console.log("Título já existente")
    }
}

const saveNotes = function (notes) {
    const data = JSON.stringify(notes)
        fs.writeFileSync('notes.json', data)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataString = dataBuffer.toString()
        return JSON.parse(dataString)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes,
    addNotes
}