import React from 'react';
import { getQuestions } from '../helpers/data/questionData';
import QuestionCard from '../components/Cards/QuestionCard';
import AnswerCard from '../components/Cards/AnswerCard';

export default class FlipCard extends React.Component {
  state = {
    flipCard: {},
    answer: false,
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    getQuestions().then((response) => {
      const number = Math.floor(Math.random() * response.length);
      this.setState({
        flipCard: response[number],
        answer: false,
      });
    });
  }

  showAnswerToQuestion = (e) => {
    e.preventDefault();
    this.setState({
      answer: true,
    });
  }

  render() {
    const { flipCard, answer } = this.state;
    const showQuestion = () => <QuestionCard key={flipCard.firebaseKey} card={flipCard} showAnswer={this.showAnswerToQuestion}/>;
    const showAnswer = () => <AnswerCard key={flipCard.firebaseKey} card={flipCard} showNextQuestion={this.loadData}/>;
    return (
        <>
         { answer === false ? showQuestion() : showAnswer() };
        </>
    );
  }
}
