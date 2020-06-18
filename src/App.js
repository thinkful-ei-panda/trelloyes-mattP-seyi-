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

  cardGenerator = (id) => {
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }

  newRandomCard = (listId) => {
    const idTemp = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    console.log(idTemp);

    const newAllCards = { ...this.state.allCards, [idTemp]: this.cardGenerator(idTemp) }

    const newLists = this.state.lists.map(list => {
      if (list.id === listId) {
        const thisList = list;
        thisList.cardIds.push(idTemp);
        console.log(thisList);
        return thisList;
      } else {
        return list;
      }
    })

    this.setState({
      lists: newLists,
      allCards: newAllCards
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
              handleAddRandom={this.newRandomCard}
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
