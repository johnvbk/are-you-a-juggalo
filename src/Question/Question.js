import React from 'react';
import PossibleAnswer from '../PossibleAnswer/PossibleAnswer'

const question = (props) => {
    const style = {
        display: 'block',
        padding: '16px',
        margin: '16px auto',
        height: '400px',
        width: '420px',
        border: '1px solid black',
        textAlign: 'center',
        borderRadius: '5px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    const container_style = {
        width: '400px',
        border: '1px solid black',
        textAlign: 'center',
        background: 'white',
        opacity: '0.8',
        padding: '8px',
        position: 'relative',
        top: '300px'

    };


    style.backgroundImage = 'url("' + props.question_image + '")'
    
    return (
        <div style={style}>
            <div style={container_style}>

            <p>{props.question}?</p>

            {props.possible_answers.map((answer, index) => (
                <PossibleAnswer key={index} answer={answer} question_id={props.question_id} click={props.answer_handler}/>
                )       
            )}
            </div>

        </div>
    );
};

export default question;