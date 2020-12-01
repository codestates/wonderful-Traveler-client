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

  handleSignup = () => {
    this.setState({ error: ""});
    for (let key in this.state) {
      if (key !== 'error' && this.state[key] === "") {
        this.setState({
          error: '모든항목을 채워주세요'
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
      axios.post("ec2-15-164-38-202.ap-northeast-2.compute.amazonaws.com/signup", {
        email: this.state.email,
        password: this.state.password,
        username: this.state.username
      })
        .then(() => {
          this.props.handleSignupSuccess();
        })
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
      <div>
        {open ? (
          <div className="su-modal">
            <div className="su-signModal">
              <span className="su-close" onClick={this.handleClose}>
                x
                    </span>
              <div className="su-modalDefault" >
                <h1>Sign Up</h1>
                <input className="su-sign-info" type="text" placeholder="email" onChange={this.handleInputValue("email")} />
                <input className="su-sign-info" type="password" placeholder="password" onChange={this.handleInputValue("password")} />
                <input className="su-sign-info" type="password" placeholder="confirm password" onChange={this.handleInputValue("confirm")} />
                <input className="su-sign-info" type="text" placeholder="username" onChange={this.handleInputValue("username")} />
                <div className="signBtn" >
                  <div className="sign-up" onClick={this.handleSignup}>회원가입</div>
                </div>
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
