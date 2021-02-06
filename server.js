const express = require('express')
const app = express()
const morgan = require('morgan')


//middleware for every request
//looks for request body and turns it into req.body
//fires on every request
app.use(express.json())
app.use(morgan('dev'))

app.use('/bounties', require('./routes/bountyRouter.js'))

app.listen(9000, () => {
    console.log('The server is running on Port 9000')
})