import React from 'react'

const Team = props => {
    return(
        <div className='teamList'>
            {props.members.map(e => (
                <div className='team-member' key={e.id}>
                    <h2>{e.name}</h2>
                    <h3>{e.role}</h3>
                    <p>Email: {e.email}</p>
                </div>
            ))}
        </div>
    )
    
}

export default Team