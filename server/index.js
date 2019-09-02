const express = require('express')
const app = express()
const SERVER_PORT = 3001
const messageCtrl = require('./controllers/messages_controller')

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))


app.post('/api/messages', messageCtrl.create)
app.get('/api/messages', messageCtrl.read)
app.put('/api/messages/:id', messageCtrl.update)
app.delete('/api/messages/:id', messageCtrl.delete)

app.listen(SERVER_PORT, () => {console.log(`Listening on port ${SERVER_PORT}`)})