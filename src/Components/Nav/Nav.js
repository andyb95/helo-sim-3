import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {

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