require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')


const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env
const ctrl = require('./controller')

const app = express()

app.use(express.json())
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 6},
    secret: SESSION_SECRET
  })
)

app.post('/auth/register', ctrl.register)

massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
}).then( db => {
  app.set('db', db)
  console.log('db connected')
  app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`))
})