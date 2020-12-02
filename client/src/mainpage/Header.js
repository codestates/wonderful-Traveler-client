import './Header.css';
import { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      spreadMenu: false,
    }
  }
  
  componentDidMount = () => {
    document.addEventListener('scroll', function () {
      var currentScrollValue = document.documentElement.scrollTop;
      let header = document.getElementById("scroll");
      if (currentScrollValue > 300) {
        header.classList.add("add-background");
      } else {
        header.classList.remove("add-background");
      }
    });
  }
  clickList = () => {
    if (this.state.spreadMenu === false) {
      this.setState({ spreadMenu: true })
    } else {
      this.setState({ spreadMenu: false })
    }
  }

  render() {
    return (
      <header id="scroll" className="smooth">
        <a href="/">
          <div className="logo">
            <img src="./logoView.png" className="logoView" alt="logoView"></img> 
            <div className="logoTitle"> Wonderful Traveler </div>
            </div>
        </a>
        <div className="menu-wrap">
          <input type="checkbox" className="toggler" />
          <div className="hamburger">
            <div></div>
          </div>
          <div className="menu">
            <div className="menuAll">
              <div className="menuBar">
                <ul className="menuList">
                  <li className="menuAbout">
                    <Link to="/info"> 차박이란? </Link>
                  </li>
                  <li>
                    <div onClick={this.clickList}>추천장소</div>
                  </li>
                  {this.state.spreadMenu ?
                    <ul className="menuLocal">
                      <li>
                        <Link to="/post/seoul"> 서울 </Link>
                      </li>
                      <li>
                        <Link to="/post/gyeonggi"> 경기 </Link>
                      </li>
                    </ul> : null}
                </ul>
              </div>
              <div className="log-box">
                <div className="logBox">
                  <button onClick={this.props.openSignin}>로그인</button>
                  <button onClick={this.props.openSignup}>회원가입</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header >
    );
  }
}

export default Header;