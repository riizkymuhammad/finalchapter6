const router = require('./routes')
const express = require('express')
const app = express()
const port = 5432

app.use(express.static('assets'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(router)

app.listen(port, () => {
  console.log(`running on port: ${port}`)
})