import { Component } from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import Header from "./mainpage/Header";
import Section from './mainpage/Section';
import Footer from './mainpage/Footer'
import SignUp from './mainpage/SignUp'
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Section />
        <Footer />
        <SignUp />
      </div>
    );
  }
}

export default App;
