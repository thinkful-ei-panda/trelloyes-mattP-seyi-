import React from 'react'
import './App.css'
import List from './List'
import STORE from './store'

class App extends React.Component {
  // create state
  // add functions to modify state
  // pass down modifying functions to children as props

  deleteCard = (cardId, listId) => {
    console.log(`deleted card ${cardId} in list ${listId}`);

    this.setState(prevState => {
      const inputs = { ...prevState.lists }
      console.log(inputs);
      inputs[listId - 1].cardIds = inputs[listId - 1].cardIds.filter((cardIdTemp) => cardIdTemp !== cardId);
      return { inputs }
    })
  }

  state = STORE
  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {this.state.lists.map((list) => (
            <List
              listId={list.id}
              key={list.id}
              header={list.header}
              handleDelete={this.deleteCard}
              cards={list.cardIds.map(
                (id) => this.state.allCards[id]
              )}
            />
          ))}
        </div>
      </main>
    )
  }
}

export default App
