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
      axios.post("http://localhost:8080/signin", {
        email: this.state.email,
        password: this.state.password
      }, { withCredentials: true })
        .then((result) => {
          this.props.handleSigninSuccess();
        })
        .then(() => window.location.reload("/"))
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
      <div className="modal">
        {open ? (
          <div className="modalBody">
            <div className="modalInner">
              <div className="modalText">
                <h1>Member Login</h1>
                <input className="signInfo" type="text" placeholder="E-mail" onChange={this.handleInputValue("email")} />
                <input className="signInfo" type="password" placeholder="Password" onChange={this.handleInputValue("password")} />
                <button className="signBtn" onClick={this.handleLogin}> JOIN NOW! </button>
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

export default SignIn;