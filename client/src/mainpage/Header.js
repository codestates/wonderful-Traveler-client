import './Header.css';
import { Component } from 'react';
class Header extends Component {

  componentDidMount = () => {
    document.addEventListener('scroll', function () {
      var currentScrollValue = document.documentElement.scrollTop;
      let header = document.getElementById("scroll");
      if (currentScrollValue > 280) {
        header.classList.add("add-background");
      } else {
        header.classList.remove("add-background");
      }
    });
  }

  render() {
    return (
      <header id="scroll" className="smooth">
        <a href="/">
          <div className="logo">
            {/* <img src="../logoView.png" className="logoView" alt="logoView"></img>  */}
            <div className="logoTitle">WONDERFUL TRAVELER</div>
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
                    <a href="/info">차박이란</a>
                  </li>
                  <li>
                    <a href="/posts">차박장소</a>
                  </li>
                  <li>
                    <div onClick={() => { alert("준비중 입니다") }}>랜트카</div>
                  </li>
                  <li>
                    <div onClick={() => { alert("준비중 입니다") }}>도구판매</div>
                  </li>
                </ul>
              </div>
              <div className="logBox">
                <div className="logInBox">
                  {!this.props.isLogin ?
                    <div>
                      <button onClick={this.props.openSignin}>로그인</button>
                      <button onClick={this.props.openSignup}>회원가입</button>
                    </div> :
                    <div>
                      <button onClick={this.props.handleSignout}>로그아웃</button>
                      <a href="/mypage"><button>마이페이지</button></a>
                    </div>}
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