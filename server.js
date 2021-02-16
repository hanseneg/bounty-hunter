const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')


//middleware for every request
//looks for request body and turns it into req.body
//fires on every request
app.use(express.json())
app.use(morgan('dev'))

//connect to DB
mongoose.connect('mongodb://localhost:27017/bountiesdb',
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


//server listen
app.listen(9000, () => {
    console.log('The server is running on Port 9000')
})