import React, {useState} from 'react'

export default function AddBountyForm(props) {
    const initInputs = {firstName: props.firstName || '', 
                        lastName: props.lastName || '', 
                        living: props.living === undefined && true, 
                        bountyAmount: props.bountyAmount || 0, 
                        type: props.type || ''}
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {type, name, value, checked} = e.target
        //updates state and doesn't erase previous values, returns new object with everything from previous object then update the appropriate one with appropriate value
        if(type === 'checkbox') setInputs(prevInputs => ({...prevInputs, [name]: checked}))
        else setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        //post request
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    name='firstName' 
                    value={inputs.firstName} 
                    onChange={handleChange} 
                    placeholder='First Name'>
                </input>
                <input 
                    type='text' 
                    name='lastName' 
                    value={inputs.lastName} 
                    onChange={handleChange} 
                    placeholder='Last Name'>
                </input>
                <br></br>
                <br></br>
                <p>Dead or Alive</p>
                <div className='switch'>
                    <input 
                        id='switch-1'
                        className='switch-input'
                        type='checkbox' 
                        name='living' 
                        checked={inputs.living} 
                        onChange={handleChange} >
                    </input>
                    <label className='switch-label' for='switch-1' ></label>
                </div>
                <br></br>
                <p>Bounty Amount in Imperial Credits</p>
                <input 
                    type='number' 
                    name='bountyAmount' 
                    value={inputs.bountyAmount} 
                    onChange={handleChange} >
                </input>
                <br></br>
                <p>Type</p>
                <select name='type' 
                        value={inputs.type} 
                        onChange={handleChange}>
                    <option>---Choose one of the 3 below----</option>
                    <option value='Sith'>Sith</option>
                    <option value='Jedi'>Jedi</option>
                    <option value='Gray'>Gray</option>
                </select>
                <br></br>
                <br></br>
                <button>{props.btnText}</button>
            </form>
        </div>
    )
}