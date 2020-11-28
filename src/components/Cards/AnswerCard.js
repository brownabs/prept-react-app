import React from 'react';
import { Button } from 'reactstrap';

export default function AnswerCard({ card, showNextQuestion }) {
  return (
    <div className='card m-2 h-50 w-25'>
      <div className='card-body'>
        <h5 className='card-title'>{card.answer}</h5>
        <Button className="ml-1" id={card.firebaseKey} onClick={(e) => showNextQuestion(e)}>Submit</Button>
      </div>
    </div>
  );
}
