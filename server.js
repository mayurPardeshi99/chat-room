const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

const publicPath = path.join(__dirname + '/public')

app.use(express.static(publicPath))
app.set('views', publicPath)
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
