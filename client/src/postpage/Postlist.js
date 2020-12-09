import './Postlist.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class Postlist extends Component {

    // componentDidMount = ()=>{

    // }
    render() {
        return (
            <div id='make-hover'>
                <Link to={{
                    pathname: "/post/info/" + this.props.postdata.id,
                    state: {
                        id: this.props.postdata.id,
                        address: this.props.postdata.address,
                        user: this.props.postdata.user,
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
                                <div className="create-at">{this.props.postdata.create_at}</div>
                                </div>
                            </div>
                        </div> :
                        <div className="postlist">
                            <div className="thumbnail-div">
                                <img className="thumbnail" src={this.props.postdata.thumbnail} alt="img" />
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