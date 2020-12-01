import { Component } from 'react';
import SetPicture from './SetPicture';
import SetPassword from './SetPassword';
import './Mypage.css';

class Mypage extends Component {
    constructor(props){
        super(props);
        this.state={};
    }
  render() {
    return (
      <div>
            <section className="top-section">
                <div>유저정보</div>
            </section>
            <section className="mydata-section">
                <div>프로필</div>
                <div>좋아요</div>
                <div>작성한 게시물</div>
            </section>
            <section className="mypage-section">
                <SetPicture userinfo={this.props.userinfo}/>
                <SetPassword userinfo={this.props.userinfo}/>
            </section>
      </div>
    );
  }
}

export default Mypage;