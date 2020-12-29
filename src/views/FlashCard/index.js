import React from 'react';
<<<<<<< HEAD
import QuestionData from '../../helpers/data/questionData';
import QuestionCard from '../../components/Cards/QuestionCard';
import AnswerCard from '../../components/Cards/AnswerCard';
=======
import AnswerCard from '../../components/Cards/AnswerCard';
import QuestionCard from '../../components/Cards/QuestionCard';
import QuestionData from '../../helpers/data/questionData';
>>>>>>> c30ee86fdea1bacb5175ccfa435412c13e95598c

export default class FlashCard extends React.Component {
  state = {
    flashCards: [],
    currentCard: {},
    answer: false,
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    if (!this.state.answer) {
      QuestionData.getQuestions().then((response) => {
<<<<<<< HEAD
        const currentCard = response[0];
        this.setState({
          currentCard,
          flashCards: response,
=======
        this.setState({
          flashCards: response,
          currentCard: response[0],
>>>>>>> c30ee86fdea1bacb5175ccfa435412c13e95598c
        });
      });
    } else {
      const { flashCards } = this.state;
      const nextQuestion = flashCards.indexOf(this.state.currentCard) + 1;
      this.setState({
<<<<<<< HEAD
        currentCard: flashCards[nextQuestion] || flashCards[0],
        answer: false,
=======
        answer: false,
        currentCard: flashCards[nextQuestion] || flashCards[0],
>>>>>>> c30ee86fdea1bacb5175ccfa435412c13e95598c
      });
    }
  }

  showAnswerToQuestion = (e) => {
    e.preventDefault();
    this.setState({
      answer: true,
    });
  }

  render() {
<<<<<<< HEAD
    const { currentCard, answer } = this.state;
    const showQuestion = () => <QuestionCard key={currentCard.firebaseKey} card={currentCard} showAnswer={this.showAnswerToQuestion}/>;
    const showAnswer = () => <AnswerCard key={currentCard.firebaseKey} card={currentCard} showNextQuestion={this.loadData}/>;
    return (
        <>
        <div className="flash-card d-flex flex-wrap justify-content-center">
        { answer === false ? showQuestion() : showAnswer() }
      </div>
        </>
=======
    const { answer, currentCard } = this.state;
    const showQuestion = () => <QuestionCard key={currentCard.firebaseKey} card={currentCard} showAnswer={this.showAnswerToQuestion}/>;
    const showAnswer = () => <AnswerCard key={currentCard.firebaseKey} card={currentCard} showNextQuestion={this.loadData}/>;
    return (
        <div className="flash-card d-flex flex-wrap justify-content-center">
          {answer === false ? showQuestion() : showAnswer() }
      </div>
>>>>>>> c30ee86fdea1bacb5175ccfa435412c13e95598c
    );
  }
}
