const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty.js')

//gives fake data ids
/* const { v4: uuid }= require('uuid') */

//fake data
/* const bounties = [
    {firstName: 'Mike', lastName: 'James', living: true, bountyAmount: 350, type: 'Sith', _id: uuid()},
    {firstName: 'Steve', lastName: 'James', living: true, bountyAmount: 250, type: 'Jedi', _id: uuid()},
    {firstName: 'Jon', lastName: 'James', living: true, bountyAmount: 200, type: 'Jedi', _id: uuid()},
    {firstName: 'Dylan', lastName: 'James', living: true, bountyAmount: 1000, type: 'Sith', _id: uuid()},
    {firstName: 'Kyle', lastName: 'James', living: true, bountyAmount: 700, type: 'Sith', _id: uuid()},
    {firstName: 'Sam', lastName: 'James', living: true, bountyAmount: 450, type: 'Jedi', _id: uuid()}
] */

/* bountyRouter.get('/', (req, res) => {
    res.send(bounty)
})
bountyRouter.post('/', (req, res) => {
    const newBounty = req.body
    newBounty._id = uuid()
    bounty.push(newBounty)
    res.send(`Successfully added ${newBounty.firstName} to the data base.`)
}) */

//get all using mongoose method
bountyRouter.get('/', (req, res, next) => {
    Bounty.find((err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

//post a new bounty
bountyRouter.post('/', (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })

    /* const newBounty = req.body
    newBounty._id = uuid()
    bounties.push(newBounty)
    res.send(newBounty) */
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