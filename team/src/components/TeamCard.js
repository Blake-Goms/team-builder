import React from 'react'

export default function TeamCard(props) {

    const Clicker = () =>{
        props.setUpdate(props.member)
        props.setIsUpdating(true)
    }
    return (
        <div className='card'>
            <p>{props.member.name}</p>
            <p>{props.member.email}</p>
            <p>{props.member.position}</p>
            <button onClick={Clicker} >Update</button>
        </div>
    )
}
