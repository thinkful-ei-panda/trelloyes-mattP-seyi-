import React from 'react'
import './List.css'
import Card from './Card'
import store from './store'

function List(props) {
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {props.cards.map((card) => (
          <Card
            key={card.id}
            cardId={card.id}
            listId={props.listId}
            title={card.title}
            content={card.content}
            deleteCard={props.handleDelete}
          />
        ))}
        <button type="submit" className="List-add-button" onClick={() => props.handleAddRandom(props.listId)}>
          + Add Random Card
        </button>
      </div>
    </section>
  )
}

List.defaultProps = {
  key: 'key',
  header: 'Header',
  cards: [],
}

export default List
