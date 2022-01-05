const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('<h1>Hi Sriram</h1>')
})

app.get('/love',(req,res) => {
    res.send('<iframe src="https://drive.google.com/file/d/1TH3inDZHHi9JGsBMVWjjizmUhGOc700y/preview" width="300" height="300" allow="autoplay">')
})

app.get('/ganga',(req,res) => {
    res.send('<iframe src="https://drive.google.com/file/d/1TH3inDZHHi9JGsBMVWjjizmUhGOc700y/preview" width="300" height="300" allow="autoplay">')
})

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})