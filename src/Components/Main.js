import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import Form from './Form'; 
import './style.css';
class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 1,
      disabledNext: false,
      disabledPrev: false
    }
  }
  togglePrev(e) {
    let index = this.state.index - 1;
    let disabledPrev = (index === 0);

    this.setState({ index: index, disabledPrev: disabledPrev, disabledNext: false })
  }

   toggleNext(e) {
     let index = this.state.index + 1;
     let disabledNext = index === (this.props.profiles.length - 1);

     this.setState({ index: index, disabledNext: disabledNext, disabledPrev: false })
   }

   render() {
    let {profiles} = this.props; 
     const { index, disabledNext, disabledPrev } = this.state
     let profile =  this.props.profiles[index]; 
     
     if (profile) {
       return (
         <div>
           {/* {this.showQuestions(profiles)} */}
           <Form profile = {profile}/>
           {/* <Profile {...profile} /> */}
           <div>
             <Prev toggle={(e) => this.togglePrev(e)} active={disabledPrev} />
             <Next toggle={(e) => this.toggleNext(e)} active={disabledNext} />
           </div>
         </div>
       )
     } else {
       return <span>error</span>
     }
  }
// showQuestions(profiles){
// let xhml = ''; 
// if(profiles.length > 0 && profiles !== ''){
//     xhml = profiles.map((profile, index )=>{
//     return <Form key={index} profile={profile} index={index} />
//     })
// }
//     return xhml
// }

}
const mapStateToProps = state => {
    return {
      profiles: state.items

    }
  }
  export default connect(mapStateToProps,null)(Main);

function Prev(props) {
  return (
    <button type="button"  className="btn" onClick={props.toggle} disabled={props.active}>Previous</button>
  );
}

function Next(props) {
  return (
    <button type="button" className="btn"  onClick={props.toggle} disabled={props.active}>Next</button>
  );
}

function Profile(props) {
  return (
    <div>
     <h1>{props.id}</h1>
       <h1>{props.name}</h1>
    </div>
  );
}
