import {SUBMIT} from './../constants/ActionTypes';

let defaultState = [];
let feedback = JSON.parse(localStorage.getItem('feedback'));
const form = (state = defaultState, action) => {
defaultState = (feedback!==null && feedback.length>0)? feedback : defaultState;
	switch(action.type){
		case SUBMIT:
			let {feebacks} = action; 
			 console.log(action)
            state.push(feebacks);
        localStorage.setItem('feedback',JSON.stringify(state))
			return [...state];
		default:
			return state;
	}
}

export default form;