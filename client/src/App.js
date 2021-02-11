import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Bounty from './Bounty'
import AddBountyForm from './AddBountyForm'
import './App.css'

function App() {
    const [bounties, setBounties] = useState([])

    function getBounties() {
        axios.get('/bounties')
        .then(res => setBounties(res.data))
        .catch(err => console.log(err))
    }

    function addBounty(newBounty){
        axios.post('/bounties', newBounty)
            .then(res => {
                setBounties(prevBounties => [...prevBounties, res.data])
            })
            .catch(err => console.log(err))
    }

    function deleteBounty(bountyId){
        axios.delete(`/bounties/${bountyId}`)
            .then(res => 
                setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId)))
            .catch(err => console.log(err))
    }

    function editBounty(updates, bountyId){
        axios.put(`/bounties/${bountyId}`, updates)
            .then(res => {
                setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getBounties()
    }, [])

    return (
        <div>
            <h1>Add a New Bounty</h1>
            <AddBountyForm 
                submit={addBounty} 
                btnText='Add Bounty'
            />
            <h1>See the List of Bounties</h1>
            <h1>and Edit or Delete Them</h1>
            {bounties.map(bounty => 
                <Bounty 
                    className='bounty'
                    {...bounty} 
                    key={bounty._id}
                    deleteBounty={deleteBounty}
                    editBounty={editBounty}/>) 
            }
        </div>
    )
}

export default App