import { Component } from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import Header from "./mainpage/Header";
import Section from './mainpage/Section';
import Footer from './mainpage/Footer'
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Section />
        <Footer />
      </div>
    );
  }
}

export default App;
