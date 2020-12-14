import React, { Component } from 'react';
import './LikeHeart.css';

class LikeHeart extends Component {
    state = {
        like: false,
    }

    // handleIncrement = () => {}
    // state object 안에 있는 count를 증가 한 뒤 state를 update를 해야 한다.
    toggleLike = (state) => {
        this.setState({
            like: ! this.state.like,
            // this.props.like.data[0]
        });
    }

    // handleDecrement = () = > {}
    // toggleDisLike = (state) => {
    //     const likeNum = this.state.likeNum -1 ;
    //     this.setState({
    //         likeNum : likeNum < 0 ? 0 : likeNum
    //     })
    //     alert('좋아요 버튼을 취소했습니다.');
    // }

    render() {
        const changeColour = this.state.like ? "red" : "grey"
        
        return (
            <div className="like">
                <button clssName="heartBtn"
                onClick={this.toggleLike}>
                    <i className="fas fa-heart fa-lg" style={{ color: 
                    changeColour}}>{this.state.likeNum}</i>
                </button>
            </div>
        );
    }
}

export default LikeHeart;