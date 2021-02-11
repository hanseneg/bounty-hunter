import React, {useState} from 'react'
import AddBountyForm from './AddBountyForm'

function Bounty(props) {
    console.log(props)
    const {firstName, lastName, _id, bountyAmount, living, type, editBounty} = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div>
            { !editToggle ?
                <>
                    <h2>{`${firstName} ${lastName}`}</h2>
                    <h3>{bountyAmount}</h3>
                    <h3>{type}</h3>
                    {living ? <p style={{color: "green"}}>Alive</p> : <p style={{color: "red"}}>Dead</p>}
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
                        submit={editBounty/* , () => setEditToggle(prevToggle => !prevToggle) */}
                        /* submit={() => setEditToggle(false)} */
                    />
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                </>
            }
        </div>
    )
}

export default Bounty