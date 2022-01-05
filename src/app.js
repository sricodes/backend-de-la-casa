const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const dbConnection = mongoose.connect('mongodb+srv://root:3uptk62Q@main.5nq9z.mongodb.net/nino')


app.get('/', (req, res) => {
    res.send('<h1>Hi Sriram</h1>')
})

app.get('/love',(req,res) => {
    res.send('<iframe src="https://drive.google.com/file/d/1TH3inDZHHi9JGsBMVWjjizmUhGOc700y/preview" width="300" height="300" allow="autoplay">')
})

app.get('/ganga',(req,res) => {
    res.send('<iframe src="https://drive.google.com/file/d/1TH3inDZHHi9JGsBMVWjjizmUhGOc700y/preview" width="300" height="300" allow="autoplay">')
})


app.get('/user', (req,res)=> {
    user.find().then((data) => {res.send(data)})
})

const user = require('./users/user')
const obj = new user({name:'sriram'})
obj.save()

user.insertMany([{name:'rajan',age:24,sex:'M'}])

user.create({name:'raghav',age:24,sex:'M'})



app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})