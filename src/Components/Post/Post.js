import React, {Component} from 'react'
import {connect} from 'react-redux'

class Post extends Component {

  constructor(props){
    super(props)
    
  }

  render(){
    const {first_name, last_name, profile_pic, title, date, text} = this.props
    return(
      <div>
        <img 
        className = 'profile_pic'
        src = {profile_pic}
        alt = 'profile_pic'
        />
        <p>{first_name} {last_name}</p>
        <h1>{title}</h1>
        <h2>{date}</h2>
        <h3>{text}</h3>
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  const {first_name, last_name, profile_pic, title, date, text} = reduxState
  return {first_name, last_name, profile_pic, title, date, text}
  
} 

export default connect(mapStateToProps)(Post)