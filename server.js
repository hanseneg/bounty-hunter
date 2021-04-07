const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

//step 1 connecting to heroku
const PORT = process.env.PORT || 8000

const MONGODB_URI = 'mongodb+srv://hanseneg:bountyhunter@cluster0.nbyij.mongodb.net/bountiesdb?retryWrites=true&w=majority'

//middleware for every request
//looks for request body and turns it into req.body
//fires on every request
app.use(express.json())
app.use(morgan('dev'))


//step 2 connect to heroku
//connect to DB
mongoose.connect(MONGODB_URI || 'mongodb://localhost:27017/bountiesdb',
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
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

//server listen
app.listen(PORT, () => {
    console.log(`The server is running on Port ${PORT}`)
})


//The mongolab:sandbox addon is no longer available. 
//What you can do instead is connect directly to atlas without an addon. 
//Just make sure to add the config vars 
//(in the heroku dashboard go to personal > app > settings > config vars). 
//The config vars are the MONGODB_URI and the NODE.ENV===production (the ones from the server.js file). 
//The next tutorial in this playlist shows how it's done.

