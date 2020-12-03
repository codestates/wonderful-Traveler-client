import './Postlist.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class Postlist extends Component {

    // componentDidMount = ()=>{

    // }
    render() {
        return (
            <div>
                <Link to={{
                    pathname: "/post/info/" + this.props.postdata.id,
                    state: {
                        id: this.props.postdata.id,
                        address: this.props.postdata.location + this.props.postdata.address,
                        user: this.props.postdata.user,
                        text: this.props.postdata.textValue,
                        title: this.props.postdata.title,
                        like: this.props.postdata.like
                    },
                }}>
                    <img className="thumbnail" src={this.props.postdata.thumbnail}  alt="img"/>
                    <div className="infomation">
                        <div>좋아요: {this.props.postdata.like}</div>
                        <div>지역: {this.props.postdata.location}</div>
                        <div>{this.props.postdata.title}</div>
                    </div>
                </Link>

            </div>
        )
    }
}
export default Postlist