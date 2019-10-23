const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Olá mundo!</h1>')
})

const port = 3009
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})