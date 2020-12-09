import { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Posts from './postpage/Posts';
import Postinfo from './postpage/Postinfo';
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

class App extends Component {
  state={
    isLogin: false,
    userinfo: null,
    signinOpen: false,
    signupOpen: false
  }
  componentDidMount = () => {
      // axios.get('ec2-15-164-38-202.ap-northeast-2.compute.amazonaws.com/user/info', 
      // { withCredentials: true }
      // )
      // .then((result)=>{
      //     this.setState({
      //     isLogin: true,
      //     userinfo: result.data
      //   })
      //   console.log(result.data)
      // })
  }

  handleSignUpSuccess = () => {
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
  openSignUp = () => {
    this.setState({ signupOpen: true });
  };
  closeSignUp = () => {
    this.setState({ signupOpen: false });
  };

  render() {
    return (
      <div>
        <div>
          <Header openSignin={this.openSignin} openSignup={this.openSignUp}/>
        </div>
          <SignUp open={this.state.signupOpen} close={this.closeSignUp}  handleSignUpSuccess={this.handleSignUpSuccess}/>
          <SignIn open={this.state.signinOpen} close={this.closeSignin} handleSigninSuccess={this.handleSigninSuccess}/>
        <Route exact path="/" component={Section} />
        <Switch>
          <Route path="/posts" component={Posts} />
          <Route path="/info" component={Info} />
          <Route path="/upload" component={Upload} />
          <Route path="/post/info/:id" component={Postinfo} />
          <Route path="/mypage" component={Mypage} userinfo={this.state.userinfo}/>
        </Switch>
        <Footer />
        <SignUp />
      </div>
    );
  }
}

export default withRouter(App);
