import React from 'react';

const possible_answer = (props) => {
    const div_style = {
        display: 'inline',
        padding: '16px',
        margin: '16px',
        width: '200px',
    };

    const button_style = {
        background: '#2079b0',
        borderRadius: '5px',
        color: 'white'
    }

    return (
        <div style={div_style} onClick={props.click} >
            <button style={button_style} value={props.answer} question_id={props.question_id} >{props.answer}</button>
        </div>
    );
};

export default possible_answer;