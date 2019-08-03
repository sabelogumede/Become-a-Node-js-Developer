const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// middleware setup
app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//messages list
const messages = [
    {name: 'Sabelo', message: 'Hi'},
    {name: 'Fezeka', message: 'Hello'}
]

// app get mesages route/url
app.get('/messages', (req, res) =>{
    res.send(messages)
})
// app post mesages route/url
app.post('/messages', (req, res) =>{
    messages.push(req.body)
    res.sendStatus(200)
})




const server = app.listen(3000, () => {
    console.log('server is listening on port', server.address().port)
})