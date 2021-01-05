const express = require('express')
const dotenv = require('dotenv')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Bonjour!'))

app.listen(port, () => console.log(`Listening on port ${port}!`))