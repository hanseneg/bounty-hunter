const express = require('express')
const bountyRouter = express.Router()
const { v4: uuid }= require('uuid')

//fake data
const bounty = [
    {firstName: 'mike', lastName: 'james', living: true, bountyAmount: 400, type: 'Sith', _id: uuid()},
    {firstName: 'steve', lastName: 'james', living: true, bountyAmount: 400, type: 'Sith', _id: uuid()},
    {firstName: 'jon', lastName: 'james', living: true, bountyAmount: 400, type: 'Sith', _id: uuid()},
    {firstName: 'dylan', lastName: 'james', living: true, bountyAmount: 400, type: 'Sith', _id: uuid()},
    {firstName: 'kyle', lastName: 'james', living: true, bountyAmount: 400, type: 'Sith', _id: uuid()},
    {firstName: 'sam', lastName: 'james', living: true, bountyAmount: 400, type: 'Sith', _id: uuid()}
]

/* bountyRouter.get('/', (req, res) => {
    res.send(bounty)
})
bountyRouter.post('/', (req, res) => {
    const newBounty = req.body
    newBounty._id = uuid()
    bounty.push(newBounty)
    res.send(`Successfully added ${newBounty.firstName} to the data base.`)
}) */

bountyRouter.route('/')
    .get((req, res) => {
        res.send(bounty)
    })
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuid()
        bounty.push(newBounty)
        res.send(`Successfully added ${newBounty.firstName} to the data base.`)
    })

    /* .put()
    .delete() */


module.exports = bountyRouter