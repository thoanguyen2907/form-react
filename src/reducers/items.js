import * as types from '../constants/ActionTypes.js';
import * as config from '../constants/Config';

let initialDefault = [

{	id: 1,
	title: "Nội Dung Bài Giảng",

	name:"When is the last time you experienced nostalgia?"}, 
{	id:2, 
	title: "Chấm điểm",
	name:"What's the scariest dream you've ever had?"}, 

{	id:3, 
	title: "Nhận xét chi tiết",
	name:"What's the weirdest thought you've ever had?"}, 
{	id: 4, 
	title: "Nhận xét chi tiết",
	name:"What's the first thing that comes to mind when you hear the word “fidget”?"}
];
let questions = JSON.parse(localStorage.getItem(config.QUESTIONS_FROM_LOCAL_STOGARE));
initialDefault = (questions!==null && questions.length>0)? questions : initialDefault;
const items = (state = initialDefault,action) => {
	switch (action.type) {
	case types.LIST_QUESTIONS:	
    console.log(action);
 localStorage.setItem(config.QUESTIONS_FROM_LOCAL_STOGARE ,JSON.stringify(state)); 	
	return [...state];
	default:
			return state
	}
	
}
export default items; 