import './Postlist.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

class Postlist extends Component {
    state = {
        date: this.props.postdata.createdAt
    }
    // componentDidMount = () => {
    //     if(this.props.postdata){
    //         let date = this.props.postdata.createdAt
    //         let num = date.indexOf('T');
    //         let newDate = date.slice(0, num);
    //         this.setState({date: newDate})
    //     }
    // }
    render() {
        console.log(this.props.postdata.userId)
        return (
            <div id='make-hover'>
                <Link to={{
                    pathname: "/post/info/" + this.props.postdata.id,
                    state: {
                        id: this.props.postdata.id,
                        address: this.props.postdata.address,
                        user: this.props.postdata.userId,
                        text: this.props.postdata.textValue,
                        title: this.props.postdata.title,
                        like: this.props.postdata.like
                    },
                }}>
                    {this.props.list ?
                        <div>
                            <div className="post-lists">
                                <div>
                                    <div className="title">{this.props.postdata.title}</div>
                                </div>
                                <div>
                                    <div className="location">{this.props.postdata.address}</div>
                                </div>
                            </div>
                            <div className="post-user">
                                <div>
                                    <div className="user">{this.props.postdata.user}</div>
                                </div>
                                <div>
                                    <div className="create-at">{this.state.date}</div>
                                </div>
                            </div>
                        </div> :
                        <div className="postlist">
                            <div className="thumbnail-div">
                                {this.props.postdata.thumbnail === null ? <div className="thumbnail">이미지없음</div> :
                                    <img className="thumbnail" src={this.props.postdata.thumbnail} alt="img" />}
                            </div>
                            <div className="infomation">
                                <div className="title">{this.props.postdata.title}</div>
                                <div className="location">{this.props.postdata.address}</div>
                            </div>
                        </div>}
                </Link>

            </div>
        )
    }
}
export default Postlist