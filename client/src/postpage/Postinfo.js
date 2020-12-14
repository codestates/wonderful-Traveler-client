import './Postinfo.css';
import { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
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
    };
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
        
        return (
            <div>
                <section className="top-section">
                </section>
                <section className="infoSection">
                    <h1 className="postTitle">
                        {this.props.location.state.title}
                    </h1>
                    <div className="postText">
                        {this.props.location.state.text ? 
                            <div>{ReactHtmlParser(this.props.location.state.text)}
                            </div> : null}
                    </div>
                </section>
                <div className="otherDiv">
                    <LikeHeart />
                </div>
                <section className="replyDiv">
                    <h4> COMMENT </h4>
                    <div>
                        <ul className="textbox">
                            {this.state.replies.map((el) => (
                            <li>{el.article}</li>
                            ))}
                        </ul>
                    </div>
                        <div>
                            <input
                                type="text"
                                placeholder="댓글달기..."
                                onChange={this.textChange}
                                onKeyPress={this.pressEnter}
                                value={this.state.newReply}
                            />
                            <button id="replySubmitButton"onClick={this.add}>댓글 등록</button>
                        </div>
                </section>
            </div>
        )
    }
}

export default Postinfo
