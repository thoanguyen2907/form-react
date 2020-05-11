import * as types from './../constants/ActionTypes';


export const actListQuestions = (questions) => {
	return {
		type : types.LIST_QUESTIONS,
		questions
	}
}
export const actFormSubmit = (feedback,rating) => {
	return {
		type : types.SUBMIT,
        feedback,
        rating
	}
}