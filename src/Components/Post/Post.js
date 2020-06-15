import React, {Component} from 'react'
import {connect} from 'react-redux'

class Post extends Component {

  // constructor(props){
  //   super(props)
    
  // }


  render(){
    const {first_name, last_name, profile_pic, title, date, text, post_img} = this.props

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
        <img
        className = 'post_img'
        src = {post_img}
        alt = 'content pic'
        />
        <h3>{text}</h3> 
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  const {first_name, last_name, profile_pic, title, date, text, post_img} = reduxState
  return {first_name, last_name, profile_pic, title, date, text, post_img}
  
} 

export default connect(mapStateToProps)(Post)