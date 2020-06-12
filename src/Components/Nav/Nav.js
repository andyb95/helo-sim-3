import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Nav extends Component {

  constructor(props){
    super(props)
    // this.state = {
    //   isLoggedIn: false
    // }
  }

  // logOut(){
  //   this.setState({
  //     isLoggedIn: false
  //   })
  // }

  render(){
    const {username, profile_pic} = this.props
    console.log(this.props)
    return(
      <div>Nav.js
        {/* {!this.state.isLoggedIn ? (
          <img 
          src = {profile_pic} 
          alt = "profile pic"
          />
          // <p>{username}</p>
        )} */}
        <img 
          src = {profile_pic} 
          alt = "profile pic"
          />
          <p>{username}</p>
        <Link to='/dashboard'>Home</Link>
        <Link to='/new'>New Post</Link>
        {/* <button onClick = {this.logOut()}> */}
          <Link to='/'>Logout</Link>
        {/* </button> */}
      </div>
    )
  }    
}

const mapStateToProps = reduxState => {
  const {username, profile_pic} = reduxState 
  return {username, profile_pic}
 }

export default connect(mapStateToProps)(Nav)