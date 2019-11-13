import React, {useState} from 'react';

const TeamForm = props => {
    const [member, setMember] = useState({name: '', email: '', role: ''})

    const handleChanges = e => {
        setMember({...member, [e.target.name]: e.target.value})
    };
    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({name: '', email: '', role: ''});
    };
    return (
        <form onSubmit={submitForm}>
            <input
                type='text'
                name='name'
                id='name'
                onChange={handleChanges}
                value={member.name}
                placeholder='Name'
            />
            <input
                type='email'
                name='email'
                id='email'
                onChange={handleChanges}
                value={member.email}
                placeholder='Email'
            />
            <input
                type='text'
                name='role'
                id='role'
                onChange={handleChanges}
                value={member.role}
                placeholder='Role'
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default TeamForm