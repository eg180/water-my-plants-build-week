const express = require('express')
const dotenv = require('dotenv')
const app = express()
const port = process.env.port || 5000

app.use(express.json())
app.use('/api/*', (_, res) => {
    res.json({ data: "Will output to all endpoints" });
});

app.get('/', (req, res) => res.send('Bonjour!'))

app.listen(port, () => console.log(`Listening on port ${port}!`))