import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {newPost} from '../../ducks/reducer'
import axios from 'axios'

class Form extends Component {

  constructor(props){
    super(props)
    this.state = {
      title: '',
      imageURL: '',
      content: '',
      date: '2020-06-13',
    }
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  post = async(e) => {
    const {user_id} = this.props
    console.log(this.props)
    const {title, imageURL, content, date} = this.state
    const newPost = await axios
      .post(`/form/newPost/${user_id}`, {title, content, date, imageURL})
      const {text, post_img} = newPost.data
      this.props.newPost(user_id, title, text, date, post_img)

    
  }

  render(){
    const {title, imageURL, content} = this.state
    return(
      <div>Form.js
        <input 
          type= 'text'
          placeholder = 'title'
          name="title"
          value={title}
          onChange = {(e) => this.handleChange(e)}
        />
        <input 
          type= 'text'
          placeholder = 'img URL'
          name="imageURL"
          value={imageURL}
          onChange = {(e) => this.handleChange(e)}
        />
        <input 
          type= 'text'
          placeholder = 'content'
          name="content"
          value={content}
          onChange = {(e) => this.handleChange(e)}
        />

        <button onClick = {(e) => this.post(e)}>
          <Link to = '/dashboard'>Post</Link>
        </button>
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  console.log('reduxState:', reduxState)
  const {user_id} = reduxState
  console.log('user_id:', user_id)
  return {user_id: user_id}
}

export default connect(mapStateToProps, {newPost})(Form)