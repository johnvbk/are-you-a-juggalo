import React from 'react';

const outcome = (props) => {

    const style = {
        display: 'block',
        padding: '16px',
        margin: '16px auto',
        width: '400px',
        height: '260px',
        border: '1px solid black',
        textAlign: 'center',
        color: 'white',
        backgroundImage: 'url("/images/bitch_clown.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'

    };

    let outcome_text = "You a bitch fo real!"
    if (props.total_juggalo_answers > 2) {
        style.backgroundImage = 'url("/images/sad_clown.png")'
        style.height = "430px"
        outcome_text = "You've been pimped by a Detroit mac daddy!"
    }
    if (props.total_juggalo_answers > 5) {
        style.backgroundImage = 'url("/images/juggalo_clown.png")'
        style.height = "250px"
        outcome_text = "Straight Juggalo fo life!"
    }
    return (
        <div>
            <div style={style}> 
                {outcome_text}
            </div>
            <button onClick={props.reset_click}>Start Over</button>
        </div>
    );
};

export default outcome;