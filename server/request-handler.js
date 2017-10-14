import React from 'react'
import { renderToString } from 'react-dom/server'

import App from '../src/App'
import template from './views/template'

function requesthandler (req, res) {
  let body = renderToString(<App />)
  res.send(template({body}))
}

module.exports = requesthandler
