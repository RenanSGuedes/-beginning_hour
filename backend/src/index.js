const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')

const url = new URL('http://localhost:3333/')

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(url.port, () => console.log('Server is running...'))