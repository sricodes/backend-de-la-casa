console.log(`Application Started`)

const PORT = process.env.PORT || 3000
const http = require('http')
const sever = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/html')
    res.end('<iframe src="https://drive.google.com/file/d/1TH3inDZHHi9JGsBMVWjjizmUhGOc700y/preview" width="300" height="300" allow="autoplay"></iframe><iframe src="https://drive.google.com/file/d/1TH3inDZHHi9JGsBMVWjjizmUhGOc700y/preview" width="300" height="300" allow="autoplay"></iframe>')
})


sever.listen(PORT,()=>{
    console.log(`Server Started ${PORT}`)
})