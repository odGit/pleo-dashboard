import * as express from 'express'
import * as fileUpload from 'express-fileupload'
import * as createError from 'http-errors'
import * as path from 'path'
import * as logger from 'morgan'
import * as chokidar from 'chokidar'
const PORT = 5000

import expensesRouter from './routes/expenses'

const app = express()

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type')
  next()
})

app.use(logger('dev'))
app.use(
  fileUpload({
    limit: { fileSize: Infinity }
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/receipts', express.static(path.join(__dirname, 'receipts')))

app.use('/expenses', expensesRouter)

app.use(function(req, res, next) {
  next(createError(404))
})

app.use(function(err, req, res, next) {
  const message = err.message
  const error = req.app.get('env') === 'development' ? err : {}
  const status = err.status || 500

  res.status(status || 500)
  res.send({
    status,
    message,
    error
  })
})

let server = null

function start() {
  return app.listen(PORT, 'localhost', function(err) {
    if (err) throw err
    const addr = this.address()
    console.log('Listening at http://%s:%d', addr.address, addr.port)
  })
}

function reboot() {
  Object.keys(require.cache).forEach(function(id) {
    if (/[\/\\]routes[\/\\]/.test(id)) {
      console.log('Clearing /routes/* module cache from server')
      delete require.cache[id]
    }
  })

  server.close(() => {
    console.log('Server is closed')
    console.log('\n----------------- RESTARTING SERVER -------------')
    server = start()
  })
}

// HOT reloading of express sever
// and watching of files change
const production = process.env.NODE_ENV === 'production'
if (!production) {
  server = start()
  chokidar.watch(['./app.ts', './routes']).on('all', (event, at) => {
    if (event === 'add') {
      console.log('Watching for changes at', at)
    }

    if (event === 'change') {
      console.log('Detected changes at', at)
      server = reboot()
    }
  })
} else {
  start()
}
