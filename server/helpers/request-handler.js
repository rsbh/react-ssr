import React from 'react'
import { renderToString } from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'

import Routes from '../../src/Routes/Routes'
import template from '../views/template'

function requesthandler (req, res) {
  let body = renderToString(
    <StaticRouter location={req.path} context={{}}>
      <Routes />
    </StaticRouter>)
  res.send(template({body}))
}

module.exports = requesthandler
