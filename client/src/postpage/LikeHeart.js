import React, { Component } from 'react';
import axios from 'axios';
import './LikeHeart.css';

// 붙여야할 것 cookie / string , postid / number -> true or false로 작업

class LikeHeart extends Component {
    state = {
        like: false,
    }

    // componentDidmount = () => {
    //     axios.post('http://localhost:8080/postid/', {
    //         address: document.querySelector("").value,
    //     }, { withCredentials: true })
    //         .then((result) => {
    //             this.setState({});
    //         })
    //         .catch(err => {
    //             this.setState({
    //                 error: error
    //             })
    //         })
    // }

    toggleLike = (state) => {
        this.setState({
            like: ! this.state.like,
            // this.props.like.data[0]
        });
    }
    
    render() {
        const changeColour = this.state.like ? "red" : "grey"
        
        return (
            <div className="like">
                <button className="heartBtn"
                onClick={this.toggleLike}>
                    <i className="fas fa-heart fa-lg" style={{ color: 
                    changeColour}}>{}</i>
                </button>
            </div>
        );
    }
}

export default LikeHeart;