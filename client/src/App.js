import { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Posts from './postpage/Posts';
import Header from "./mainpage/Header";
import Footer from './mainpage/Footer';
import Section from './mainpage/Section';
import Info from './info/Info'
import Upload from './postpage/Upload'
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <Route exact path="/" component={Section} />
        <Switch>
          <Route path="/post/:id" component={Posts} />
          <Route path="/info" component={Info} />
          <Route path="/upload" component={Upload} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
