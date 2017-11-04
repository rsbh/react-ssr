import express from 'express'
import requestHandler from './helpers/request-handler'

const app = express()
const Port = process.env.PORT || 5000

app.use(express.static('public'))
app.get('*', requestHandler)

app.listen(Port, () => {
  console.log('Server Running on', Port)
})
