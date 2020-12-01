import React, { Component } from 'react';
// import axios from 'axios';
import cookie from 'react-cookies';
const token = cookie.load('token');

class SetPassword extends Component {
    constructor(props){
        super(props);
        this.state = {
            oldPassword: "",
            newPassword: "",
            confirm: "",
            error: ""
        }
    }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  render() {
    return (
      <div className="set-password">

        <h3>유저 정보</h3>
        <div className="user-inf">
          <div className="user-em-id">이메일:  email</div>
          <div className="user-em-id">아이디:  test</div>
        </div>
        <h3>비밀번호 변경</h3>
        <div>
          <input className="pwchange" type="password" placeholder="현재 비밀번호" onChange={this.handleInputValue("oldPassword")}></input>
        </div>
        <div>
          <input className="pwchange" type="password" placeholder="변경 비밀번호" onChange={this.handleInputValue("newPassword")}></input>
        </div>
        <div>
          <input className="pwchange" type="password" placeholder="변경 비밀번호" onChange={this.handleInputValue("confirm")}></input>
        </div>
        <div>
          <button className="change" >변경</button>
          {this.state.error ? <div className="alert-box">{this.state.error}</div> : ''}
        </div>
      </div>
    );
  }
}

export default SetPassword;