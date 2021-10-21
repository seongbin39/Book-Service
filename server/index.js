var express = require('express')
var app = express()
var cors = require('cors')
var logger = require('morgan')
var mongoose = require('mongoose')
var routes = require('./src/routes')

var corsOptions = {
    origin: 'http://localhost:3000',
    Credentials: true
}

const CONNECT_URL = 'mongodb://localhost:27017/book-service'
mongoose.connect(CONNECT_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...'))
    .catch(e => console.log(`Failed to connect MongoDB: ${e}`))

app.use(cors(corsOptions))
app.use(express.json())
app.use(logger('tiny'))

app.use("/api", routes)

app.use( (req, res, next) => {
    res.status(404).send("Sorry can't find page")
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Something is broken on server !")
})

app.listen(5000, () => {
    console.log('Server is Running on port 5000 ...')
})