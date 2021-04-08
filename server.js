const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

const path = require("path")

//step 1 connecting to heroku
const PORT = process.env.PORT || 5000

//const MONGODB_URI = 'mongodb+srv://hanseneg:bountyhunter@cluster0.nbyij.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

//middleware for every request
//looks for request body and turns it into req.body
//fires on every request

app.use(express.static(path.join(__dirname, "client", "build")))

app.use(express.json())
app.use(morgan('dev'))


//step 2 connect to heroku
//connect to DB
mongoose.connect(process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log('Connected to the DB')
)

//routes
app.use('/bounties', require('./routes/bountyRouter.js'))

//error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


//step 3 connect to heroku
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'))
// }

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})

//server listen
app.listen(PORT, () => {
    console.log(`The server is running on Port ${PORT}`)
})