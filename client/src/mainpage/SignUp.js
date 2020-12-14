import React from "react";
import axios from "axios";
import "./SignUp.css";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      confirm: "",
      error: "",
    };
  }
  
  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  handleClose = () => {
    this.setState({
      error: "",
    })
    this.props.close();
  }

  handleSignUp = () => {
    this.setState({ error: ""});
    for (let key in this.state) {
      if (key !== 'error' && this.state[key] === "") {
        this.setState({
          error: '모든 항목을 채워주세요'
        })
        return;
      } 
      else {
        this.setState({ error: "" });
      }
    }
    
    if (this.state.password !== this.state.confirm) {
      this.setState({
        error: "모든 항목을 입력해 주십시오"
      })
    } else {
      this.setState({ error: "" });
      axios.post("http://localhost:8080/signup", {
        email: this.state.email,
        password: this.state.password,
        username: this.state.username
      })
        .then(() => {
          this.props.handleSignUpSuccess();
        })
        .then(()=>window.location.reload("/"))
        .catch(err =>{
          this.setState({
            error: "존재하는 이메일 입니다"
          })
        })
    }
  }

  render() {
    const { open } = this.props;
    return (
        <div className="modalSignUp">
        {open ? (
          <div className="SignUpBody">
            <div className="SignUpInner">
              <div className="SignUpText">
                <h1>Sign Up</h1>
                <input className="signUpinfo" type="text" placeholder="Username" onChange={this.handleInputValue("username")} />
                <input className="signUpinfo" type="text" placeholder="E-mail" onChange={this.handleInputValue("email")} />
                <input className="signUpinfo" type="password" placeholder="Password" onChange={this.handleInputValue("password")} />
                <input className="signUpinfo" type="password" placeholder="Confirm Password" onChange={this.handleInputValue("confirm")} />
                <button className="signUp" onClick={this.handleSignUp}> SignUp </button>
                <button className="exitBtn" onClick={this.handleClose}> Exit </button>
                {this.state.error ? <div className="alert-box">{this.state.error}</div> : ''}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Signup;
