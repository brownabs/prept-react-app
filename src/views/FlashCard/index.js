import React from 'react';
import QuestionData from '../../helpers/data/questionData';
import QuestionCard from '../../components/Cards/QuestionCard';
import AnswerCard from '../../components/Cards/AnswerCard';

export default class FlashCard extends React.Component {
  // go to question component below and send in props only key and card, go to question card
  // go to answer component below and send in props, go to answer card
  // create function showAnswerToQuestion and pass as props inside of QuestionCard component
  // create button for showAnswerToQuestion in Question Card component
  // create button in Answer Card and pass loadData as props
  // currently, how we have it set up, what do you think will happen?

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
        this.setState({
          currentCard: response[0],
          flashCards: response,
        });
      });
    } else {
      const { flashCards } = this.state;
      const nextQuestion = flashCards.indexOf(this.state.currentCard) + 1;
      this.setState({
        currentCard: flashCards[nextQuestion] || flashCards[0],
        answer: false,
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
    const { currentCard, answer } = this.state;
    const showQuestion = () => <QuestionCard key={currentCard.firebaseKey} card={currentCard} showAnswer={this.showAnswerToQuestion}/>;
    const showAnswer = () => <AnswerCard key={currentCard.firebaseKey} card={currentCard} showNextQuestion={this.loadData}/>;
    return (
        <>
        <div className="flash-card d-flex flex-wrap justify-content-center">
        { answer === false ? showQuestion() : showAnswer() }
      </div>
        </>
    );
  }
}
