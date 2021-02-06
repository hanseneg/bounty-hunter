import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Bounty from './Bounty'
import AddBountyForm from './AddBountyForm'

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
            <AddBountyForm 
                submit={addBounty} 
                btnText='Add Bounty'
            />
            {bounties.map(bounty => 
                <Bounty 
                    {...bounty} 
                    key={bounty._id}
                deleteBounty={deleteBounty}
                editBounty={editBounty}/>) 
            }
        </div>
    )
}

export default App