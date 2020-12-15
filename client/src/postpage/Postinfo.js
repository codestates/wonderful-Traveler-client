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
            replies: [
                {
                    text: "",
                },
            ],
            userdata: null,
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
    }

    textChange = (e) => {
        this.setState({
            newReply: e.target.value,
        });
    };

    add = () => { // Button 요소의 onClick 이벤트 핸들러
        let arr = this.state.replies;
        arr.push({
            article: this.state.newReply,
        });
        this.setState({
            replies: arr,
            newReply: "",
        });
    };

    pressEnter = (e) => {
        if (e.key === "Enter" && this.state.newReply) {
            this.add();
            e.target.value = "";
        }
    };

    render() {
        console.log(this.state)
        console.log(this.props)
        return (
            <div>
                <section className="topSection"></section>
                <section className="infoSection">
                    <div className="edit-button">
                        {this.state.userdata ?
                            (this.state.userdata.id === this.props.location.state.user.id ?
                                <Link className="goto-update"to={{
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
                        <LikeHeart />
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
                            {this.state.replies.map((el) => (
                                <div className="textboxList" key='id'>
                                    <div className="article">{el.article}</div>
                                    {/* <div className="userId">{el.userId}</div>
                                <div className="id">{el.id}</div> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Postinfo
