import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { loginUser } from "../../ducks/reducer";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      // profile_pic: "",
      birthday: ""
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
      const { id, profile_pic, first_name, last_name, birthday} = loggedInUser.data
      this.props.loginUser(username, id, profile_pic, first_name, last_name, birthday)
      console.log(this.props)
        // this.props.loginUser(
        //   res.data.user_id,
        //   res.data.first_name,
        //   res.data.last_name,
        //   res.data.profile_pic,
        //   res.data.birthday
        // );
        // this.props.history.push("/dashboard");
        // console.log(this.state); //set state for mapStateToProps???
      
      // .catch((err) => {
      //   alert("Could not log in");
      // });
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
        <button onClick={(e) => this.loginUser(e)}>Login</button>
        <button onClick={(e) => this.registerUser(e)}>Register</button>
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { loginUser })(Auth);
