import React from "react";
import axios from "axios";
import "./SignIn.css";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleClose = () => {
    this.setState({
      error: "",
    })
    this.props.close();
  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  handleLogin = () => {
    if (this.state.email === "" || this.state.password === "") {
      this.setState({
        error: '모든 항목을 입력해 주십시오'
      });
    } else {
      this.setState({ error: '' });
      axios.post("ec2-15-164-38-202.ap-northeast-2.compute.amazonaws.com/signin", {
        email: this.state.email,
        password: this.state.password
      }, {withCredentials: true})
      .then((result)=>{
        console.log(result);
        console.log('로그인완료');
        this.props.handleSigninSuccess();
      })
      .catch(err => {
        this.setState({
          error: '이메일/비밀번호를 확인해주십시오'
        })
      })

    }
  }

  render() {
    const { open } = this.props;
    return (
      <div>
        {open ? (
          <div className="modal">
            <div className="signModal">
              <span className="close" onClick={this.handleClose}>
                X
              </span>
              <div className="modalDefault" >
                <h1>Sign In</h1>
                <input className="sign-info" type="text" placeholder="email" onChange={this.handleInputValue("email")} />
                <input className="sign-info" type="password" placeholder="password" onChange={this.handleInputValue("password")} />
                <div className="signBtn" >
                  <div className="login" onClick={this.handleLogin}>로그인</div>
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

export default SignIn;