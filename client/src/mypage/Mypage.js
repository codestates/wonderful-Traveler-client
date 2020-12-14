import { Component } from 'react';
import SetPicture from './SetPicture';
import SetPassword from './SetPassword';
import axios from 'axios';
import './Mypage.css';

class Mypage extends Component {
    constructor(props){
        super(props);
        this.state={
          userinfo: null
        };
    }
    componentDidMount = () => {
      axios.get('http://localhost:8080/user/info', 
      { withCredentials: true }
      )
      .then((result)=>{
          this.setState({
          userinfo: result.data
        })
      })
  }
  render() {
    console.log(this.state)
    return (
      <div>
            <section className="mypagesection">
                <div></div>
            </section>
            <section className="mydata">
                <div>
                  <span className='tab-title'>프로필</span>
                  <span className='tab-title'>좋아요</span>
                  <span className='tab-title'>작성한 게시물</span>
                </div>
            </section>
            <section className="mypage">
                <SetPicture />
                <SetPassword userinfo={this.state.userinfo}/>
            </section>
      </div>
    );
  }
}

export default Mypage;