import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div className="Card">
      <button type="button" onClick={() => props.deleteCard(props.cardId, props.listId)}>delete</button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}
Card.defaultProps = {
  title: 'New Card',
  content: 'Card content',
}
export default Card
