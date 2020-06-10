import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Nav extends Component {

  render(){
    const {username, profilepic} = this.props
    
    return(
      <div>Nav.js
        <img 
        src = {profilepic} 
        alt = "profile pic"
        />
        <p>{username}</p>
        <Link to='/dashboard'>Home</Link>
        <Link to='/new'>New Post</Link>
        <Link to='/'>Logout</Link>
      </div>
    )
  }    
}

const mapStateToProps = reduxState => {
  const {username, profilepic} = reduxState 
  return {username, profilepic}
 }

export default connect(mapStateToProps)(Nav)