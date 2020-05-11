import React, { Component } from 'react';
import {connect} from 'react-redux'
import {actFormSubmit} from './../actions/index'; 
import ReactStars from 'react-stars'
import './style.css';
class Form extends Component {
    constructor(props){
        super(props);
        this.state ={
            feedback: '',
            rating: 0    
    }
  }
    handleSubmit =(event)=> {
      let {feedback,rating} =this.state; 
      this.props.handleSubmit(feedback,rating);
      event.preventDefault();
    }
  
    ratingChanged = ( newRating ) => {
    this.setState({rating: newRating});
    }
      
      handleChange = (event) => {
        const target = event.target;
        const value = target.name === 'rating' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
      }
    render() {
        let {profile} = this.props;
        console.log(profile);
        return (
            <div className="container">
            <form onSubmit={this.handleSubmit}>
            <div id="content">
                  <div className="title">{profile.title} </div>
                   <div className="question">{profile.name}</div>
               </div>
               <div id="content" className="feedback">
                 <div className="title white"> Chấm điểm</div>
                 <div className="question"> 
                 <ReactStars
        count={10}
        name="rating"
        value = {this.state.rating}
        onChange={this.ratingChanged}
        size={40}
        color2={'#ffd700'} />
                    </div>
                 </div>           
        
             <div id="content" className="feedback">
                 <div className="title white"> </div>
                 <div className="question">
              <input className="text-line" type="text" name="feedback" value= {this.state.feedback} onChange={this.handleChange}placeholder="Your answer"></input>
                 </div>           
             </div>
            </form>
         
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    handleSubmit: (feedback,rating) => {
      dispatch(actFormSubmit(feedback,rating))
    }
}
}
export default connect(null, mapDispatchToProps)(Form);
