import React from 'react'
import ReactDOM from 'react-dom'

import renderer from 'react-test-renderer'
import Card from './Card'

describe('<Card />', () => {
	const props = {
		key: 'test_id',
		title: 'Card title',
		content: 'Card content',
	}

	it('should render without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<Card {...props} />, div)
		ReactDOM.unmountComponentAtNode(div)
	})

	it('renders as expected', () => {
		const wrapper = renderer
			.create(<Card {...props} />)
			.toJSON()
		expect(wrapper).toMatchSnapshot()
	})
})
