const express = require('express')
const path = require('path')

const app = express()
const Port = process.env.PORT || 3000

app.use(express.static(path.resolve(__dirname, '../dist/public')))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'))
})

app.listen( Port , () => {
    console.log('Server Running on', Port )
})

