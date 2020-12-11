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
                <div></div>
            </section>
            <section className="mydata-section">
                <div>
                  <span className='tab-title'>프로필</span>
                  <span className='tab-title'>좋아요</span>
                  <span className='tab-title'>작성한 게시물</span>
                </div>
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