import React, { Component } from 'react'
import { connect } from 'react-redux'; 
import Main from './Components/Main';




class App extends Component {
  render() {
    let {profiles} = this.props; 
    return (
      <div>
      <Main profiles={profiles} />
   </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    profiles: state.items

  }
}
export default connect(mapStateToProps,null)(App);

 

