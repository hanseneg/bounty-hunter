import React, {useState} from 'react'
import AddBountyForm from './AddBountyForm'

function Bounty(props) {
    console.log(props)
    const { firstName, lastName, _id, bountyAmount, living, type} = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div>
            { !editToggle ?
                <>
                    <h1>{`${firstName} ${lastName}`}</h1>
                    <h2>{bountyAmount}</h2>
                    <h2>{living}</h2>
                    {/* anonymous function so onclick calls anon func then that calls delete func
                    without it, it would call function immediately 
                    id is passed in so button knows which to delete*/}
                    <button onClick={() => props.deleteBounty(_id)}>Delete</button>
                    {/* give us previous toggle and set it to opposite of what it was before */}
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                </>
            :
                <>
                    <AddBountyForm 
                        firstName={firstName}
                        lastName={lastName}
                        bountyAmount={bountyAmount}
                        living={living}
                        type={type}
                        _id={_id}
                        btnText='Submit Edit'
                        submit={props.editBounty}
                    />
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                </>
            }
        </div>
    )
}

export default Bounty