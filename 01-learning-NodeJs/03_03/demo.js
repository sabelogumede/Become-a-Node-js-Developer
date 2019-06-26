var fs = require('fs')

//our object data 
var data = {
    name: 'Sabelo'
}

//write to file 'data.json'
fs.writeFile('data.json', JSON.stringify(data), (err) => {
    console.log('write finished', err)
})