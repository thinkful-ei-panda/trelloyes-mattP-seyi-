import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import App from './App'

describe('<App />', () => {
	const defaultProps = {
		key: 'key',
		header: 'header',
		cards: {
			a: 'a',
			b: 'b',
		},
	}

	it('render as expected', () => {
		const wrapper = renderer.create(<App />).toJSON()
		expect(wrapper).toMatchSnapshot()
	})

	it('should render without crashing', () => {
		const main = document.createElement('main')
		ReactDOM.render(<App {...defaultProps} />, main)
		ReactDOM.unmountComponentAtNode(main)
	})
})
