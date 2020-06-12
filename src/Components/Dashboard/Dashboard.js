import React, {Component} from 'react'
import {connect} from 'react-redux'

class Dashboard extends Component {

  constructor(){
    super()
    this.state = {
      posts: [],
      search: ''
    }
  }

  handleSearch(val){
    this.setState({search: val})
  }

  render(){
    return(
      <div>Dashboard.js

        <input 
          type= 'search'
        //Set up an input box for the search functionality. Make sure to store the value in state.
        />

        <button >Search</button>

        <button >Reset</button>

        <input 
          type= 'checkbox'
          //Set up a checkbox to include the user's posts labeled 'My Posts'.
              // Make sure to store the value in state.
              // The value should be true intially.
        />

      </div>
    )
  }
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(Dashboard)