import * as types from './../constants/ActionTypes';


export const actListQuestions = (questions) => {
	return {
		type : types.LIST_QUESTIONS,
		questions
	}
}
export const actFormSubmit = (feebacks) => {
	return {
		type : types.SUBMIT,
        feebacks,
	}
}
export const actClearForm = () => {
	return {
		type : types.CLEAR_FORM,
        
	}
}
