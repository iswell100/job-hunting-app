const initalState = {
	counter: 0
}

export default function CounterReduceer(state = initalState, action) {
	switch (action.type) {
		case 'increment':
			return {
				...state,
				counter: state.counter + 1
			}

		default:
		return state;
	}
}