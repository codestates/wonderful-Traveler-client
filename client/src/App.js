import { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import cookie from 'react-cookies';
import Posts from './postpage/Posts';
import Header from "./mainpage/Header";
import Footer from './mainpage/Footer';
import Section from './mainpage/Section';
import Info from './info/Info';
import Upload from './postpage/Upload';
import SignIn from './mainpage/SignIn';
import SignUp from './mainpage/SignUp';
import Mypage from './mypage/Mypage';
import axios from 'axios';
import './App.css';
const token = cookie.load('token');

class App extends Component {
  state={
    isLogin: false,
    userinfo: null,
    signinOpen: false,
    signupOpen: false
  }
  componentDidMount = () => {
    if(token) {
      axios.get('ec2-15-164-38-202.ap-northeast-2.compute.amazonaws.com/user/info', 
      { headers: {'token': token}, 
      withCredentials: true }
      )
      .then((result)=>{
          this.setState({
          isLogin: true,
          userinfo: result.data
        })
        console.log(result.data)
      })
    }
  }

  handleSignupSuccess = () => {
    this.setState({
      signupOpen: false,
    });
  }
  handleSigninSuccess = () => {
    this.setState({
      signinOpen: false,
    });
  }

  openSignin = () => {
    this.setState({ signinOpen: true });
  };
  closeSignin = () => {
    this.setState({ signinOpen: false });
  };
  openSignup = () => {
    this.setState({ signupOpen: true });
  };
  closeSignup = () => {
    this.setState({ signupOpen: false });
  };

  render() {
    console.log(this.state)
    return (
      <div>
        <div>
          <Header openSignin={this.openSignin} openSignup={this.openSignup}/>
        </div>
          <SignUp open={this.state.signupOpen} close={this.closeSignup}  handleSignupSuccess={this.handleSignupSuccess}/>
          <SignIn open={this.state.signinOpen} close={this.closeSignin} handleSigninSuccess={this.handleSigninSuccess}/>
        <Route exact path="/" component={Section} />
        <Switch>
          <Route path="/post/:id" component={Posts} />
          <Route path="/info" component={Info} />
          <Route path="/upload" component={Upload} />
          <Route path="/mypage" component={Mypage} userinfo={this.state.userinfo}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
