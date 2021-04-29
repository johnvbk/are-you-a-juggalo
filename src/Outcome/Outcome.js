import React from 'react';

const outcome = (props) => {
    const style = {
        display: 'block',
        padding: '16px',
        margin: '16px',
        width: '200px',
        border: '1px solid black',
        textAlign: 'center'
    };

    let outcome_text = "You a bitch fo real!"
    if (props.total_juggalo_answers > 2)
        outcome_text = "You've been pimped by a detroit mac daddy!"
    if (props.total_juggalo_answers > 4)
        outcome_text = "Straight Juggalo fo life!"

    return (
        <p style={style}> {outcome_text}</p>
    );
};

export default outcome;