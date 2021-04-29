import React from 'react';

const possible_answer = (props) => {
    const style = {
        display: 'block',
        padding: '16px',
        margin: '16px',
        width: '200px',
        border: '1px solid black',
        textAlign: 'center'
    };

    return (
        <div style={style} onClick={props.click} >
            <button value={props.answer} question_id={props.question_id} >{props.answer}</button>
        </div>
    );
};

export default possible_answer;