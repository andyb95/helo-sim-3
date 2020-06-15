import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import { loginUser } from "../../ducks/reducer";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: "",
      username: "",
      password: "",
      // first_name: "",
      // last_name: "",
      // profile_pic: "",
      // birthday: ""
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  registerUser = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    axios
      .post("/auth/register", { username, password })
      .then((res) => {
        this.props.loginUser(res.data.username, res.data.userId);
        this.props.history.push("/dashboard");
      })
      .catch((err) => {
        alert("Could not register");
      });
  };

  loginUser = async (e) => {
    e.preventDefault();
    const {username, password} = this.state
    const loggedInUser= await axios
      .post("/auth/login", { username, password })
      const { user_id, profile_pic, first_name, last_name, birthday} = loggedInUser.data
      this.props.loginUser(username, user_id, profile_pic, first_name, last_name, birthday)
    console.log(loggedInUser)
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        Auth.js
        <input
          type="text"
          placeholder="username..."
          name="username"
          value={username}
          onChange={(e) => this.changeHandler(e)}
        />
        <input
          type="password"
          placeholder="password..."
          name="password"
          value={password}
          onChange={(e) => this.changeHandler(e)}
        />
        
        <button onClick={(e) => this.loginUser(e)}>
          <Link to='/dashboard'>Login</Link>
        </button>
        <button onClick={(e) => this.registerUser(e)}>        
          <Link to='/dashboard'>Register</Link>
        </button>
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { loginUser })(Auth);
