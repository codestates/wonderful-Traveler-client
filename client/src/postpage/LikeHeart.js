import React, { Component } from 'react';
import './LikeHeart.css';

class LikeHeart extends Component {
    state = {
        like: false,
    }

    toggleLike = (state) => {
        this.setState({
            like: ! this.state.like,
            // this.props.like.data[0]
        });
    }

    // getLikeInfo = async function () {
    //     const { userId, login } = this.props;
        
    //     // 로그인 된 상태에서 만 실행해야 한다.
    //     if(login) {
    //         const postId = this.props.match.params.data;
    //         const obj = { userId : userId, postId: postId }

    //         const getData = await axios('users/like', {
    //             method: 'POST',
    //             headers: new Headers(),
    //             data: obj
    //         })

    //         if(getData.data[0]) {
    //             this.setState({
    //                 likeExist : true,
    //                 likeNum : getData.data[0].likes
    //             })
    //         }
    //     }
    // };
    
    render() {
        const changeColour = this.state.like ? "red" : "grey"
        
        return (
            <div className="like">
                <button className="heartBtn"
                onClick={this.toggleLike}>
                    <i className="fas fa-heart fa-lg" style={{ color: 
                    changeColour}}>{this.state.likeNum}</i>
                </button>
            </div>
        );
    }
}

export default LikeHeart;