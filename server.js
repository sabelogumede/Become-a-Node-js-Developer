const express = require('express')
const app = express()

app.use(express.static(__dirname))

//messages list
const messages = [
    {name: 'Sabelo', message: 'Hi'},
    {name: 'Fezeka', message: 'Hello'}
]

// app get route/url
app.get('/messages', (req, res) =>{
    res.send(messages)
})








const server = app.listen(3000, () => {
    console.log('server is listening on port', server.address().port)
})