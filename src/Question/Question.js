import React from 'react';
import PossibleAnswer from '../PossibleAnswer/PossibleAnswer'

const question = (props) => {
    const style = {
        display: 'block',
        padding: '16px',
        margin: '16px auto',
        width: '400px',
        border: '1px solid black',
        textAlign: 'center',
        borderRadius: '5px'
    };

    
    return (
        <div style={style}>
            <p>{props.question}?</p>

            {props.possible_answers.map((answer, index) => (
                <PossibleAnswer key={index} answer={answer} question_id={props.question_id} click={props.answer_handler}/>
                )       
            )}

        </div>
    );
};

export default question;