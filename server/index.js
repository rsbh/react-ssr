import express from "express"
import React from "react"
import { renderToString } from "react-dom/server"
import path from 'path'

import App from "../src/App"

const app = express()
const Port = process.env.PORT || 5000

app.use(express.static(path.resolve(__dirname, '../dist/public')))

app.get('*', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>React Server Side Rendering</title>
    <script src="bundle.js"></script>
    </head>
    <body>
    <div id="app">${renderToString(<App/>)}</div>
    </body>
    </html>`
)
})


app.listen( Port , () => {
    console.log('Server Running on', Port )
})