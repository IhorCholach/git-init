import { SHOW_LOGIN } from '../constants'

export const buttonAction = (payload) => {
	return {
		type: SHOW_LOGIN,
		payload
	}
}