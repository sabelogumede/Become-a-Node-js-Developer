var fs = require('fs')
// read local files
fs.readdir('c:/', (err, data) => {
    console.log(data)
})