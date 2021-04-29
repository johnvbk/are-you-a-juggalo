import React, { Component } from 'react';
import './App.css';
import Question from './Question/Question';
import Outcome from './Outcome/Outcome';

class App extends Component {

  state = {
    questions: [
      {id: 1, question: "Do you drink Faygo", possible_answers: ['Yes', 'No'], answer: null, juggalo_answer: 'Yes', available: true},
      {id: 2, question: "Is Eminem a little bitch", possible_answers: ['Yes', 'No'], answer: null, juggalo_answer: 'Yes', available: false},
      {id: 3, question: "Did Chuck cut 'em up", possible_answers: ['Yes', 'No'], answer: null, juggalo_answer: 'Yes', available: false},
      {id: 4, question: "Did $WB jump you in" , possible_answers: ['Yes', 'No'], answer: null, juggalo_answer: 'Yes', available: false},
      {id: 5, question: "Do you know how magnets work" , possible_answers: ['Yes', 'No'], answer: null, juggalo_answer: 'No', available: false},
    ],
    answered_all_questions: false,
    total_juggalo_answers: 0
  }

  answerQuestionHandler = ( event ) => {
    const question_id = Number(event.target.getAttribute('question_id'))
    const question_answer = event.target.value
    const question_idx = this.state.questions.map(function(e) { return e.id; }).indexOf(question_id)
    
    let questions = [...this.state.questions]
    questions[question_idx]['answer'] = question_answer
    questions[question_idx].available = false

    if (questions.length > question_idx+1)
      questions[question_idx+1].available = true
    else
      this.setState({answered_all_questions: true})

    this.setState({questions:questions})

    if (question_answer === questions[question_idx]['juggalo_answer'])
      this.setState({total_juggalo_answers: this.state.total_juggalo_answers + 1})
  }

  render () {
    return (
      <div className="App">
        Are you a Juggalo?
        {this.state.questions.map((question) => (
              question.available
              ?<Question key={question.id} question={question.question} question_id={question.id} possible_answers={question.possible_answers} answer_handler={this.answerQuestionHandler}/>
              :null
              )       
          )}
        {this.state.answered_all_questions
          ?<Outcome total_juggalo_answers={this.state.total_juggalo_answers} />
          :null
        }
      </div>
    );
  }
}

export default App;
