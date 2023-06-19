const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataString = dataBuffer.toString()
const dataJSON = JSON.parse(dataString)
dataJSON.name = 'denis'
dataJSON.age = 29
console.log(dataJSON)
const data = JSON.stringify(dataJSON)
fs.writeFileSync('1-json.json', data)
console.log(data)
