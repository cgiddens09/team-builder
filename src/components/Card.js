import React from 'react';

const Card = props => {
    return(
        <div>
            {props.member.map(member => (
                <div>
                    <h2>{member.name}</h2>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
            ))}
        </div>
    );
}

export default Card;