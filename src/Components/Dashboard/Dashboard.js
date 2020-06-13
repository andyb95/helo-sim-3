import React, {Component} from 'react'
import axios from 'axios'
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

  handleSearch(val){
    this.setState({search: val})
  }

  getPosts = async (e) => {
    const {search} = this.state
    const userPosts = await axios
      .get(`/dash/getPosts/${search}`)
      const {first_name, last_name, profile_pic, title, date, text} = userPosts.data
      this.props.getPosts(first_name, last_name, profile_pic, title, date, text)
      this.setState({
        posts: userPosts.data
      })
    console.log('post', this.state)
  }

  render(){
    return(
      <div>Dashboard.js

        <input 
          type= 'search'
          onChange = {(e) => this.handleSearch(e.target.value)}
        />

        <button onClick = {this.getPosts()}>Search</button>

        <button >Reset</button>

        <input 
          type= 'checkbox'
          //Set up a checkbox to include the user's posts labeled 'My Posts'.
              // Make sure to store the value in state.
              // The value should be true intially.
        />

      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  const {search} = reduxState
  return {search}
}
export default connect(mapStateToProps, {getPosts})(Dashboard)