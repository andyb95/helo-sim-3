import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {loginUser} from '../../ducks/reducer'

class Nav extends Component {

  render(){
    return(
      <div>Nav.js
        <Link to='/dashboard'>Home</Link>
        <Link to='/new'>New Post</Link>
        <Link to='/'>Logout</Link>
      </div>
    )
  }    
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(Nav)