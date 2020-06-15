import React from 'react';
import './App.css';
import List from './List'


class App extends React.Component {
  

  render() {
    const store = this.props.store.STORE
    const lists = store.lists.map(listItem => (
      <List 
        key = {listItem.id}
        header = {listItem.header}
        cards = {listItem.cardIds.map(id => store.allCards[id])}
      />
    ))
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes</h1>
          <div className='App-list'>
            {lists}
          </div>
        </header>
      </main>
    )
  }
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  }
}

export default App;
