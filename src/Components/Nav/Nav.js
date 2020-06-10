import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Nav extends Component {

  render(){
    const {username, profilePicUrl} = this.props
    return(
      <div>Nav.js
        <img src = {profilePicUrl} />
        <p>{username}</p>
        <Link to='/dashboard'>Home</Link>
        <Link to='/new'>New Post</Link>
        <Link to='/'>Logout</Link>
      </div>
    )
  }    
}

const mapStateToProps = reduxState => {
  const {username, profilePicUrl} = reduxState 
  return {username, profilePicUrl}
 }

export default connect(mapStateToProps)(Nav)