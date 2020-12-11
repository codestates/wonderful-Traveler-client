import React, { Component } from 'react';
import axios from 'axios';
// import axios from 'axios';

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

  handleChangePassword = () => {
    this.setState({ error: ""});
    for (let key in this.state) {
      if (key !== 'error' && this.state[key] === "") {
        this.setState({
          error: "모든 항목을 입력해주십시오"
        })
        return;
      } 
      else {
        this.setState({ error: "" });
      }
    }
    
    if (this.state.newPassword !== this.state.confirm) {
      this.setState({
        error: "비밀번호를 다시 확인해 주십시오"
      })
    } else {
      this.setState({ error: "" });
      axios.post("http://localhost:8080/user/changepw", {
        oldPassword: this.state.oldPassword,
        newPassword: this.state.newPassword
      },{ withCredentials: true }
      )
        .then(() => {
          this.setState({
            error: "비밀번호가 변경되었습니다"
          })
        })
        .catch(err =>{
          this.setState({
            error: "현재 패스워드가 틀립니다"
          })
        })
    }
  }

  render() {
    return (
      <div className="set-password">

        <h3>유저 정보</h3>
        <div className="user-inf">
          <div className="user-em-id">이메일:  email</div>
          <div className="user-em-id">아이디:  test</div>
        </div>
        <h3>비밀번호 변경</h3>
        <div className="change-pw">
          <input className="pwchanges" type="password" placeholder="현재 비밀번호" onChange={this.handleInputValue("oldPassword")}></input>
          <input className="pwchanges" type="password" placeholder="변경 비밀번호" onChange={this.handleInputValue("newPassword")}></input>
          <input className="pwchanges" type="password" placeholder="변경 비밀번호" onChange={this.handleInputValue("confirm")}></input>
        </div>
        <div>
          <button onClick={this.handleChangePassword} className="change" >변경</button>
          {this.state.error ? <div className="alert-box">{this.state.error}</div> : ''}
        </div>
      </div>
    );
  }
}

export default SetPassword;