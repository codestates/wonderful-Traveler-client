import './Fillter.css';
import { Component } from 'react';

class Fillter extends Component {

    render() {
        return (
            <div className="fillter">
                <button className="fillter-button" onClick={this.props.ClickFillterRecent}>최신순</button>
                <button className="fillter-button" onClick={this.props.ClickFillterLike}>좋아요순</button>
            </div>
        )
    }
}
export default Fillter