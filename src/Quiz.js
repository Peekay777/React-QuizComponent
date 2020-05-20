import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion.js';
import QuizEnd from './QuizEnd.js';

let quizData = require('./quiz_data.json');

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz_position: 1
        };
    }

    showNextQuestion() {
        this.setState({
            quiz_position: this.state.quiz_position + 1
        });
    }

    handleResetClick() {
        this.setState({
            quiz_position: 1
        });
    }

    render() {
        const isQuizEnd = this.state.quiz_position - 1 === quizData.quiz_questions.length;

        let questionOrEnd;
        if (isQuizEnd) {
            questionOrEnd = <QuizEnd 
                resetClickHandler={this.handleResetClick.bind(this)}
            />;
        } else {
            questionOrEnd = <QuizQuestion
                showNextQuestionHandler={this.showNextQuestion.bind(this)}
                quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}
            />;
        }

        return (
            <div>
                {questionOrEnd}
            </div>
        )
    }
}

export default Quiz;