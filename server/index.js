const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())


const ctrl = require('./controller.js')

app.get('/api/houses', ctrl.getHouses)
app.delete('/api/houses/:id', ctrl.deleteHouse)
app.post('/api/houses', ctrl.createHouse)
app.put('/api/houses/:id', ctrl.updateHouse)

app.listen(4004, () => {console.log('working on port 4004')})