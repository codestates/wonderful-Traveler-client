import React, { Component } from 'react';
import './LikeHeart.css';

class LikeHeart extends Component {
    render() {
        const changeColour = this.props.like ? "red" : "grey"

        return (
            <div>
                <div className="like">
                    <button className="heartBtn"
                        onClick={this.props.toggleLike}>
                        <i className="fas fa-heart fa-lg" style={{
                            color:
                                changeColour
                        }}>{this.props.likenum}</i>
                    </button>
                </div>
                <div >
                    {this.props.userdata !== null ?
                        <div className="post-userinfo">
                            <h2>글쓴이</h2>
                            <div>
                                {this.props.userdata.picture !== null ?
                                    <img className="post-userpic" src={this.props.userdata.picture} alt="img" />
                                    : <img className="post-userpic" src="../../blankuser.png" alt="img" />}
                                <div className="post-username">{this.props.userdata.username}</div>
                            </div>
                        </div>
                        : null}
                </div>
            </div>
        );
    }
}

export default LikeHeart;