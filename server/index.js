require('import-export')
require('babel-core/register')({'presets': ['env', 'react']})

const express = require('express')
const path = require('path')

const requestHandler = require('./request-handler')

const app = express()
const Port = process.env.PORT || 5000

app.use(express.static(path.resolve(__dirname, '../public')))
app.get('*', requestHandler)

app.listen(Port, () => {
  console.log('Server Running on', Port)
})
