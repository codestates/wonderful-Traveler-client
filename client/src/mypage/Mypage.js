import { Component } from 'react';
import Postlist from "../postpage/Postlist";
import SetPicture from './SetPicture';
import SetPassword from './SetPassword';
import axios from 'axios';
import './Mypage.css';

class Mypage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: null,
      profile: true,
      upload: false,
      showdata: null,
    };
  }
  componentDidMount = () => {
    axios.get('https://wonderful-travler.net/user/info',
      { withCredentials: true }
    )
      .then((result) => {
        this.setState({
          userinfo: result.data
        })
      })
  }

  handleProfile = () => {
    this.setState({ profile: true, upload: false, showdata: null })
  }

  handleUpload = () => {
    this.setState({ showdata: null, upload: false, profile: false });
    axios.post('https://wonderful-travler.net/posts/search', {
      userId: this.state.userinfo.id,
    }, { withCredentials: true })
      .then((result) => {
        this.setState({ showdata: result.data.posts, upload: true, profile: false });
      })
      .catch(err => {
        this.setState({
          error: '사진이 없습니다'
        })
      })
  }

  handleLike = () => {
    this.setState({ showdata: null, upload: false, profile: false });
    axios.post('https://wonderful-travler.net/posts/search', {
      likeuser: this.state.userinfo.id,
    }, { withCredentials: true })
      .then((result) => {
        this.setState({ showdata: result.data.posts, upload: true, profile: false });
      })
      .catch(err => {
        this.setState({
          error: '사진이 없습니다'
        })
      })
  }

  render() {
    return (
      <div>
        <section className="mypagesection">
          <div></div>
        </section>
        <section className="mydata">
          <div>
            <span className='tab-title' onClick={this.handleProfile}>프로필</span>
            <span className='tab-title' onClick={this.handleLike}>좋아한 게시물</span>
            <span className='tab-title' onClick={this.handleUpload}>작성한 게시물</span>
          </div>
        </section>
        {this.state.profile ?
          <section className="mypage">
            <SetPicture />
            <SetPassword />
          </section> : null}
        {this.state.upload ?
          <section className="mypage">
            <div className="map-post">
              {this.state.showdata !== null ? this.state.showdata.map((v) => {
                return (<div key={v.id}><Postlist postdata={v} list={this.state.list} /></div>)
              }) : <div>g</div>}
            </div>
          </section> : null}
      </div>
    );
  }
}

export default Mypage;