const express = require('express')
const app = express()
const port = 3000

const cors = require('cors');
app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));
app.get('/', (req, res) => {
    res.type("json");
    res.contentType('json');
  res.send('{"hello" : "world"}');
})

app.get('/what', (req, res) => {
    res.type("json");
    res.send('{"json key":"json value"}');
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})