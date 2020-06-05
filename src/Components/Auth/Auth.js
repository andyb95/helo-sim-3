import React, {Component} from 'react'

export default class Auth extends Component {

  constructor(){
    super()
    this.state={
      username: '',
      password: ''
    }
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
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

        <button >Login</button>
        <button >Register</button>
      </div>
    )
  }
}