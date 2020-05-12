// import React, { Component } from 'react';
// import { connect } from 'react-redux'; 
// import ReactStars from 'react-stars'
// import {actFormSubmit} from './../actions/index'; 
// // import Form from './Form'; 
// import './style.css';
// class Main extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       index: 0,
//       disabledNext: false,
//       disabledPrev: false,
//       feedback: '',
//       rating: 0 
//     }
//   }
//   ratingChanged = ( newRating ) => {
//   this.setState({rating: newRating});
//   }
    
//   handleChange = (event) => {
//       const target = event.target;
//       const value = target.name === 'rating' ? target.checked : target.value;
//       const name = target.name;
//       this.setState({
//         [name]: value
//       });
//     }
//   togglePrev(e) {
//     let index = this.state.index - 1;
//     let disabledPrev = (index === 0);
//     let {feedback,rating} = this.state; 
//     this.setState({ 
//       index: index, 
//       disabledPrev: disabledPrev, 
//       disabledNext: false,
//       feedback: feedback,
//       rating: rating
//      })
//   }
//    toggleNext(e) {
//      let index = this.state.index + 1;
//      let disabledNext = index === (this.props.profiles.length - 1);
//      if(this.state.feedback !== '' && this.state.rating!== ''){
//       let feebacks = {
//         feedback: this.state.feedback,
//         rating: this.state.rating
//       }
//       this.props.toggleNext(feebacks);
//        this.setState({ index: index, disabledNext: disabledNext, disabledPrev: false,
//         feedback: '',
//         rating: 0
//       });
//      } else {
//        alert('Please Rating and Fill Your Answer')
//      }
//     e.preventDefault();
//    }

//    render() {
//     let {profiles} = this.props; 
//      const { index, disabledNext, disabledPrev } = this.state
//      let profile =  this.props.profiles[index]; 
//      if (profile) {
//        return (
//          <div>
//            {/* <Form profile = {profile}/> */}
//            <div className="container">
//             <form onSubmit={this.toggleNext}>
//             <div id="content">
//                   <div className="title">{profile.title} </div>
//                    <div className="question">{profile.name}</div>
//                </div>
//                <div id="content" className="feedback">
//                  <div className="title white"> Chấm điểm</div>
//                  <div className="question"> 
//                  <ReactStars
//         count={10}
//         name="rating"
//         value = {this.state.rating}
//         onChange={this.ratingChanged}
//         size={40}
//         color2={'#ffd700'} />
//                     </div>
//                  </div>           
        
//              <div id="content" className="feedback">
//                  <div className="title white"> </div>
//                  <div className="question">
//               <input className="text-line" type="text" name="feedback" value= {this.state.feedback} onChange={this.handleChange}placeholder="Your answer"></input>
//                  </div>           
//              </div>
//              <Prev toggle={(e) => this.togglePrev(e)} active={disabledPrev} />
//              <Next toggle={(e) => this.toggleNext(e)} active={disabledNext} />
//             </form>        
//             </div>

//          </div>
//        )
//      } else {
//        return <span>error</span>
//      }
//   }
// }
// const mapStateToProps = state => {
//     return {
//       profiles: state.items
//     }
//   }
//   const mapDispatchToProps = (dispatch,ownProps) => {
//     return {
//       toggleNext: (feebacks) => {
//         dispatch(actFormSubmit(feebacks));
//       }
//   }
//   }
//   export default connect(mapStateToProps,mapDispatchToProps)(Main);

// function Prev(props) {
//   return (
//     <button type="button"  className="btn" onClick={props.toggle} disabled={props.active}>Previous</button>
//   );
// }

// function Next(props) {
//   return (
//     <button type="submit" className="btn"  onClick={props.toggle} disabled={props.active}>Next</button>
//   );
// }


import React, {Component} from 'react';
// import './form.css';
import {connect} from 'react-redux';
import ReactStars from 'react-stars';
import Form from './Form'; 
class Main extends Component{
  constructor(props) {
    super(props)
    this.state = {
        index: 0,
        feedback: this.props.profiles.map(q => {return {}})
      }
  }
  onSubmit =(event)=> {
      event.preventDefault();
      let {feedback, rating} = this.state; 
      this.props.onSubmit(feedback, rating);
      }
  ratingChanged = ( newRating ) => {
      var feedback = this.state.feedback;
      feedback[this.state.index].rating = newRating;
        this.setState({
          feedback: feedback
        });
      }
    
  handleChange = (e) => {
    var feedback = this.state.feedback;
    feedback[this.state.index][e.target.name] = e.target.value;
      this.setState({
        feedback: feedback
      });
  }

  togglePrev = ()  => {
    if(this.state.index - 1 >= 0){
      this.setState({
        index: this.state.index - 1
      });
    }
  }
  toggleNext = () => {
    if(this.state.index + 1 < this.props.profiles.length){
      this.setState({
        index: this.state.index + 1
      });
    }
   }
    
  render(){
      return (
      <div className="container">
      <div>
        <Prev toggle={this.togglePrev} />
        <Next toggle={this.toggleNext} />
      </div>
      <form onSubmit={this.onSubmit} id="myForm">
          <Form profile = {this.props.profiles[this.state.index]}/>
          <div id="content" className="feedback">
            <div className="title white"> Chấm điểm</div>
              <ReactStars
                  count={10}
                  name="rating"
                  value = {this.state.feedback[this.state.index].rating || 0}
                  onChange={this.ratingChanged}
                  size={40}
                  color2={'#ffd700'}
              />
            </div>           
  
        <div id="content" className="feedback">
            <div className="title white"> Nhận xét chi tiết</div>
            <div className="question">
            <input className="text-line" type="text" placeholder="Your answer" name="txtMessage"
              value={this.state.feedback[this.state.index].txtMessage || ""}
              onChange={this.handleChange}
            />
            </div>           
        </div>
        <Prev toggle={this.togglePrev} />
        <Next toggle={this.toggleNext} />
        {this.state.index === this.props.profiles.length - 1 ? 
          <input type="submit" value="Gửi" />
        :""
        }
      </form>
      </div>
      );
}

}

const mapStateToProps = state => {
  return {
    profiles : state.profiles
    }
}

export default connect(mapStateToProps, null) (Main);

function Prev(props) {
  return (
    <button type="button" className="btn" onClick={props.toggle}>Previous</button>
  );
}

function Next(props) {
  return (
    <button type="button" className="btn" onClick={props.toggle}>Next</button>
  );
}