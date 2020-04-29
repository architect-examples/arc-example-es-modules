const arc = require('@architect/functions')
const fs = require('fs')
const join = require('path').join

async function route(req) {
  let module = req.params.module
  let filePath = join(__dirname, 'node_modules', '@architect', 'views', module)
  let exists = fs.existsSync(filePath)
  if (exists) {
    let file = fs.readFileSync(filePath).toString()
    return {
      type: 'text/javascript; charset=utf8',
      body: file
    }
  } else {
    return {
      status: 404,
      type: 'text/html; charset=utf8',
      body: `${module} not found`
    }
  }
}

exports.handler = arc.http.async(route)
