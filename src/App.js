import React, { Component } from 'react';
import './App.css';
import Question from './Question/Question';
import Outcome from './Outcome/Outcome';

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = this.initalState()
  }

  resetStateHandler = () => {
    this.setState(this.initalState())
  }

  initalState = () => {
    return(
      {
        questions: [
          {id: 1, question: "Do you drink Faygo", possible_answers: ['Yes', 'Maybe', 'No'], answer: null, juggalo_answer: 'Yes', available: true, image: '/images/juggalette-faygo.png'},
          {id: 2, question: "Is Eminem a little bitch", possible_answers: ['Fo Sho', 'No'], answer: null, juggalo_answer: 'Fo Sho', available: false, image: '/images/eminem_bitch.png'},
          {id: 3, question: "Did Chuck cut 'em up", possible_answers: ['Yes', 'No'], answer: null, juggalo_answer: 'Yes', available: false, image: '/images/chuck_chainsaw.png'},
          {id: 4, question: "Were you jumped you in" , possible_answers: ['Yes', 'No'], answer: null, juggalo_answer: 'Yes', available: false, image: '/images/juggalo_gang.png'},
          {id: 5, question: "Do you know how magnets work" , possible_answers: ['Yes', 'No'], answer: null, juggalo_answer: 'No', available: false, image: '/images/magnets.png'},
          {id: 6, question: "How do scientist make you feel", possible_answers: ['Pissed', 'Informed'],  answer: null, juggalo_answer: 'Pissed', available: false, image: '/images/fuck_science.png'}
        ],
        answered_all_questions: false,
        total_juggalo_answers: 0
      }
    )
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

  style = {
    "backgroundImage": 'url("/images/detroit.png")',
    "backgroundSize": "cover",
    "backgroundRepeat": "no-repeat",
    "height": "1000px"
  }

  render () {
    return (
      <div className="App" style={this.style}>
        <img src="images/are-you-a-juggalo.png" alt="Are you a Juggalo?" />
        {this.state.questions.map((question) => (
              question.available
              ?<Question 
                key={question.id} 
                question={question.question} 
                question_id={question.id} 
                question_image={question.image}
                possible_answers={question.possible_answers} 
                answer_handler={this.answerQuestionHandler}
                />
              :null
              )       
          )}
        {this.state.answered_all_questions
          ?<Outcome 
            total_juggalo_answers={this.state.total_juggalo_answers} 
            reset_click={this.resetStateHandler}/>
          :null
        }
      </div>
    );
  }
}

export default App;
