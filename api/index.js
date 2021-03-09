const express = require('express')
const app = express()
const Router = express.Router()
const fetch = require('node-fetch')
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
Router.post('/verify', (req, res) => {
    console.log(req.body)
    fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=6LfcCncaAAAAAA5yzypjI5OzpmgPOGLqkp3Uwjjk&response=${req.body.token}`,
        { method: 'POST' }
    )
      .then(response => response.json())
      .then(json => res.send(json))
})

app.use('/recaptcha', Router)

app.listen(3001, () => console.log('running at 3001 port'))