import './Header.css';
import { Component } from 'react';

class Header extends Component {
  state = {
    spreadMenu: false
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
          <div className="Logo">차박의 민족</div>
        </a>
        <div className="menu-wrap">
          <input type="checkbox" className="toggler" />
          <div className="hamburger">
            <div></div>
          </div>
          <div className="menu">
            <div>
              <div>
                <ul>
                  <li><a href="/info">차박이란</a></li>
                  <li><div onClick={this.clickList}>추천장소</div></li>
                  {this.state.spreadMenu ?
                    <ul>
                      <li><a href="/post/seoul">서울</a></li>
                      <li><a href="/post/gyeonggi">경기</a></li>
                    </ul> : null}
                </ul>
              </div>
              <div className="log-box">
                <span className="log-in">로그인</span>
                <span className="log-out">로그아웃</span>
              </div>
            </div>
          </div>
        </div>
      </header >
    );
  }
}

export default Header;