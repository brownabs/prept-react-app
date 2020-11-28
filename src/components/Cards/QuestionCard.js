import React from 'react';
import { Button } from 'reactstrap';

export default function QuestionCard({ card, showAnswer }) {
  return (
    <div className='card m-2 h-50 w-25'>
      <div className='card-body'>
        <h5 className='card-title'>{card.question}</h5>
        <Button className="ml-1">Hint</Button>
        <Button className="ml-1" id={card.firebaseKey} onClick={(e) => showAnswer(e)}>Answer</Button>
      </div>
    </div>
  );
}
