import './Postinfo.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import axios from 'axios';
import LikeHeart from './LikeHeart';

class Postinfo extends Component {
    constructor() {
        super();
        this.state = {
            newReply: "",
            userdata: null,
            like: false,
            data: null,
        };
    }

    componentDidMount = () => {
        axios.get('http://localhost:8080/user/info',
            { withCredentials: true }
        )
            .then((result) => {
                this.setState({
                    userdata: result.data
                })
            })
            .catch((err) => {
            })

        axios.get('http://localhost:8080/user/likes/' + this.props.location.state.id,
            { withCredentials: true }
        )
            .then((result) => {
                this.setState({
                    like: result.data
                })
            })
            .catch((err) => {
            })
        
        axios.get('http://localhost:8080/post/' + this.props.location.state.id,
        { withCredentials: true }
    )
        .then((result) => {
            this.setState({
                data: result.data,
                likenum: result.data.result.likes
            })
        })
        .catch((err) => {
        })

    }

    toggleLike = () => {
        axios.post('http://localhost:8080/user/likes', {
            postId: this.props.location.state.id,
      }, { withCredentials: true })
          .then((result) => {
              this.setState({like: result.data});
              window.location.reload();
          })
          .catch(err => {
              this.setState({
                  error: '사진이 없습니다'
              })
          })
    }

    textChange = (e) => {
        this.setState({
            newReply: e.target.value,
        });
    };

    add = () => { // Button 요소의 onClick 이벤트 핸들러
        axios.post('http://localhost:8080/postInfo/comment',{
            postId: this.props.location.state.id, article: this.state.newReply
        },
            { withCredentials: true }
        )
            .then((result) => {
                window.location.reload();
            })
            .catch((err) => {
            })
    };

    pressEnter = (e) => {
        if (e.key === "Enter" && this.state.newReply) {
            this.add();
            e.target.value = "";
        }
    };

    render() {
        console.log(this.state)
        console.log(this.state.likenum)
        return (
            <div>
                <section className="topSection"></section>
                <section className="infoSection">
                    <div className="edit-button">
                        {this.state.userdata ?
                            (this.state.userdata.id === this.props.location.state.user.id ?
                                <Link className="goto-update" to={{
                                    pathname: '/upload',
                                    state: {
                                        postdata: this.props.location.state
                                    }
                                }} >수정</Link> : null) : null}
                    </div>
                    <div className="infoPost">
                        <div className="postTitle">{this.props.location.state.title}</div>
                        <div className="postText">
                            {this.props.location.state.text ? <div>{ReactHtmlParser(this.props.location.state.text)}</div> : null}
                        </div>
                    </div>
                    <div className="otherDiv">
                        <LikeHeart like={this.state.like} toggleLike={this.toggleLike} likenum={this.state.likenum} userdata={this.props.location.state.user}/>
                    </div>
                </section>
                <section className="replyDiv">
                    <h4> COMMENT
                    <button id="replySubmitButton" onClick={this.add}>댓글 등록</button>
                    </h4>
                    <div>
                        <input
                            type="text"
                            rows="5"
                            placeholder="Add Your Comment"
                            onChange={this.textChange}
                            onKeyPress={this.pressEnter}
                            value={this.state.newReply}
                        />
                    </div>
                    <div>
                        <div className="textbox">
                            {this.state.data !== null ?this.state.data.result.comments.map((el) => (
                                <div className="textboxList" key='id'>
                                    <div className="article">{el.article}</div>
                                    <div className="userId">{el.user.username}</div>
                                </div>
                            )) : null}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Postinfo
