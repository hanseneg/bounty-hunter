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

bountyRouter.get('/', (req, res) => {
    res.send(bounty)
})

bountyRouter.post('/', (req, res) => {
    const newBounty = req.body
    newBounty._id = uuid()
    bounty.push(newBounty)
    res.send(`Successfully added ${newBounty.firstName} to the data base.`)
})

bountyRouter.delete('/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounty.findIndex(bounty => bounty._id === bountyId)
    bounty.splice(bountyIndex, 1)
    res.send('Successfully deleted the bounty!')
})

bountyRouter.put('/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId
    const updatedObject = req.body
    const bountyIndex = bounty.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounty[bountyIndex], updatedObject)
    res.send(updatedBounty)
})
    


module.exports = bountyRouter