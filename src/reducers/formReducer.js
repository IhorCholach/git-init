import { SHOW_LOGIN } from '../constants'

const initialState = {
	showLogin: false
}

export default function(state = initialState, action) {
	switch(action.type) {
		case SHOW_LOGIN:
			return { showLogin: action.payload };

		default:
			return state;	
	}
}