const express = require('express')
const bountyRouter = express.Router()
const { v4: uuid }= require('uuid')

//fake data
const bounties = [
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

//get all
bountyRouter.get('/', (req, res) => {
    res.send(bounties)
})

//post a new bounty
bountyRouter.post('/', (req, res) => {
    const newBounty = req.body
    newBounty._id = uuid()
    bounties.push(newBounty)
    res.send(newBounty)
})

//delete bounty
bountyRouter.delete('/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send('Successfully deleted the bounty!')
})

//update bounty
bountyRouter.put('/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId
    const updatedObject = req.body
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], updatedObject)
    res.send(updatedBounty)
})
    


module.exports = bountyRouter