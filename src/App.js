import React from 'react'
import './App.css'
import List from './List'
import STORE from './STORE'

class App extends React.Component {
	// create state
	// add functions to modify state
	// pass down modifying functions to children as props

	deleteCard = () => {
		console.log('delete')
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
