import './Header.css';
import { Component } from 'react';
// import { Link } from "react-router-dom";
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
            <img src="../../public/logoView.png" className="logoView" alt="logoView"></img> 
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
                  <li>
                    <a href="/info"> About </a>
                  </li>
                  <li>
                    <div onClick={this.clickList}>추천장소</div>
                  </li>
                  {this.state.spreadMenu ?
                    <div className="menuLocal">
                      <li className="menuLocalItem">
                        <a href="/posts/seoul"> 서울 </a>
                      </li>
                      <li className="menuLocalItem">
                        <a href="/posts/gyeonggi"> 경기 </a>
                      </li>
                      <li className="menuLocalItem">
                        <a href="/posts/dejeon"> 대전 </a>
                      </li>
                    </div> : null}
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