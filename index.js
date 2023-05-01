const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000
const place = require('./place.json')
const hotels = require('./hotel.json')
app.use(cors())
app.get('/place', (req, res) => {
  res.send(place)
})
app.get('/place/:id',(req, res) => {
  const id = parseInt(req.params.id);
  const singleData = place.find(pd=> parseInt(pd.id)=== id)
  res.send(singleData)
})
app.get('/hotel', (req, res) => {
  res.send(hotels)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})