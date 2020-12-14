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
    signinOpen: false,
    signupOpen: false,
  }
  componentDidMount = () => {
    if(document.cookie){
      axios.get('http://localhost:8080/user/info', 
      { withCredentials: true }
      )
      .then((result)=>{
          this.setState({
          isLogin: true,
          userinfo: result.data
        })
      })
    }
  }

  handleSignout = () => {
    axios.post('http://localhost:8080/signout', 
      { withCredentials: true }
      )
      .then((result)=>{
          this.setState({
          isLogin: false
        })
      })
      var cookies = document.cookie.split(";");
 
      for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i];
          var eqPos = cookie.indexOf("=");
          var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
      document.location.href = '/'
  }

  handleSignUpSuccess = () => {
    this.setState({
      signupOpen: false,
    });
  }
  handleSigninSuccess = () => {
    this.setState({
      isLogin: true,
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
    console.log(document.cookie )
    return (
      <div>
        <div>
          <Header openSignin={this.openSignin} openSignup={this.openSignUp} isLogin={this.state.isLogin} handleSignout={this.handleSignout}/>
        </div>
          <SignUp open={this.state.signupOpen} close={this.closeSignUp}  handleSignUpSuccess={this.handleSignUpSuccess}/>
          <SignIn open={this.state.signinOpen} close={this.closeSignin} handleSigninSuccess={this.handleSigninSuccess}/>
        <Route exact path="/" component={Section} />
        <Switch>
          <Route path="/posts" isLogin={this.state.isLogin} component={Posts} />
          <Route path="/info" component={Info} />
          <Route path="/upload" component={Upload} />
          <Route path="/post/info/:id" component={Postinfo} />
          <Route path="/mypage" component={Mypage} />
        </Switch>
        <Footer />
        <SignUp />
      </div>
    );
  }
}

export default withRouter(App);
