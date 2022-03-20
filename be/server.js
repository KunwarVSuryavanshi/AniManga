const express = require('express')

const app = express()

app.get('/getVideos', (req, res) => {
  console.log(req)
})

app.listen('5000', () => console.log("********Server started at port 5000************"))