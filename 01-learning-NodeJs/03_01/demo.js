//file stystem "fs"
var fs = require('fs')
var data = require('./data.json')

console.log('data', data.name)

//readfile using our fs module and define the file formate, parse in an annonomouse function as a callback
// fs.readFile('./data.json', utf-8, function (err, data) {

// })

//..parsing an errow function as a callback
fs.readFile('./data.json', 'utf-8', (err, data) => {
  var data = JSON.parse(data)
  console.log(data.name)
})


