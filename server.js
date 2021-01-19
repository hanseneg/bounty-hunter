const express = require('express')
const app = express()


//middleware for every request
//looks for request body and turns it into req.body
//fires on every request
app.use(express.json())

app.use('/bounty', require('./routes/bountyRouter.js'))


//routes
/* app.put()
app.delete() */


app.listen(9000, () => {
    console.log('The server is running on Port 9000')
})