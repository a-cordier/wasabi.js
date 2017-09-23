import constant from 'lodash.constant'
import { Dispatcher, Events } from '../common'
import { scale, unscale } from '.'

export const ValueModel = ({ init = constant(0), range }) => {
	let value = init()
	return {
		setValue(v) {
			value = unscale(range, v)
			Dispatcher.dispatch(Events.CHANGE, v)
		},
		getValue() {
			return scale(range, value)
		},
	}
}

export const AudioModel = ({ range, param, init = constant(param.value) }) => {
	const p = param
	p.value = init()
	return {
		setValue(v) {
			p.value = unscale(range, v)
			Dispatcher.dispatch(Events.CHANGE, v)
		},
		getValue() {
			return scale(range, p.value)
		},
		getParam() {
			return param
		},
	}
}
