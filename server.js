const express = require('express')
const app = express()
const port = 8080

app.use((req, res, next) => {
  console.log(req.method, req.url)
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})