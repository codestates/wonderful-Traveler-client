import React, { Component } from 'react';
import './LikeHeart.css';

class LikeHeart extends Component {

    render() {
        const changeColour = this.props.like ? "red" : "grey"
        
        return (
            <div className="like">
                <button className="heartBtn"
                onClick={this.props.toggleLike}>
                    <i className="fas fa-heart fa-lg" style={{ color: 
                    changeColour}}></i>
                </button>
            </div>
        );
    }
}

export default LikeHeart;