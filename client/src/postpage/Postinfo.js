import './Postinfo.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import axios from 'axios';

class Postinfo extends Component {
    state = {
        userdata: null,
        postdata: this.props.location.state
    }
    componentDidMount = () =>{
        axios.get('http://localhost:8080/user/info', 
      { withCredentials: true }
      )
      .then((result)=>{
          this.setState({
          userdata: result.data
        })
      })
      .catch((err)=>{
          console.log("로그인이 되어있지 않습니다")
      })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <section className="top-section">
                    <div>{this.props.location.state.title}</div>
                </section>
                <section className="info-section">
                    {this.state.userdata ? 
                    (this.state.userdata.id === this.state.postdata.user ?
                    <Link to={{
                        pathname: '/upload',
                        state: {
                            postdata: this.props.location.state
                        }}} >수정</Link> : null) : null}
                    <div className="content-text">
                        {this.props.location.state.text ? <div>{ReactHtmlParser(this.props.location.state.text)}</div> : null}
                    </div>
                    <div>
                        like: {this.props.location.state.like}
                    </div>
                </section>
            </div>
        )
    }
}
export default Postinfo