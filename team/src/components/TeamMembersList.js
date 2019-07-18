import React from 'react'
import TeamCard from './TeamCard'

export default function TeamMembersList(props) {
    return (
        <div>
            {props.members.map(member => <TeamCard member={member} setUpdate={props.setUpdate} setIsUpdating={props.setIsUpdating} />)}
        </div>
    )
}
