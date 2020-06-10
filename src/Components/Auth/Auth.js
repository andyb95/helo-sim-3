import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {loginUser} from '../../ducks/reducer'

class Auth extends Component {

  constructor(){
    super()
    this.state={
      username: '',
      password: '',
      profilepic: ''
    }
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  registerUser = (e) => {
    e.preventDefault()
    const {username, password} = this.state
    axios.post('/auth/register', {username, password})
    .then( res => {
      this.props.loginUser(res.data.username, res.data.userId, res.data.profilepic)
      this.props.history.push('/dashboard')
    })
    .catch(err => {
      alert('Could not register')
    })
  }

  loginUser = (e) => {
    e.preventDefault()
    const {username, password} = this.state
    axios.post('/auth/login', {username, password})
    .then( res => {
      debugger
      this.props.loginUser(res.data.username, res.data.userId, res.data.profilepic)
      this.props.history.push('/dashboard')
    })
    .catch(err => {
      alert('Could not log in')
    })
  }

  render(){
    const{username, password} = this.state
    return(
      <div>Auth.js

        <input 
          type='text'
          placeholder='username...'
          name='username'
          value={username}
          onChange={e => this.changeHandler(e)}
        />
        <input 
          type='password'
          placeholder='password...'
          name='password'
          value={password}
          onChange={e => this.changeHandler(e)}
        />

        <button onClick ={(e) => this.loginUser(e)}>Login</button>
        <button onClick ={(e) => this.registerUser(e)} >Register</button>
      </div>
    )
  }
}
const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, {loginUser})(Auth)
