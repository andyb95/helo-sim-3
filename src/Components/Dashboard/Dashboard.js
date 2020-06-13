import React, {Component} from 'react'
import axios from 'axios'
import Post from '../Post/Post'
import {connect} from 'react-redux'
import {getPosts} from '../../ducks/reducer'

class Dashboard extends Component {

  constructor(props){
    super(props)
    this.state = {
      posts: [],
      search: ''
    }
  }

  // componentDidMount(){
  //   this.getPosts()
  // }

  handleSearch = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  getPosts = async (e) => {
    e.preventDefault()
    const {search} = this.state
    const userPosts = await axios
      .get(`/dash/getPosts/${search}`)
      const {first_name, last_name, profile_pic, title, date, text} = userPosts.data
      this.props.getPosts(first_name, last_name, profile_pic, title, date, text)
      this.setState({
        posts: [...this.state.posts, userPosts.data]
      })
    console.log('post', this.state)
  }

  render(){
    const {search} = this.state
    return(
      <div>Dashboard.js

        <input 
          type= 'search'
          placeholder = 'first name of user'
          name="search"
          value={search}
          onChange = {(e) => this.handleSearch(e)}
        />

        <button onClick = {(e) => this.getPosts(e)}>Search</button>

        <button >Reset</button>

        <input 
          type= 'checkbox'
          //Set up a checkbox to include the user's posts labeled 'My Posts'.
              // Make sure to store the value in state.
              // The value should be true intially.
        />
        <Post />
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  const {search} = reduxState
  return {search}
}
export default connect(mapStateToProps, {getPosts})(Dashboard)