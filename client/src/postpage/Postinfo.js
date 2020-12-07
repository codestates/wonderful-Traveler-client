import './Postinfo.css';
import { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

class Postinfo extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <section className="top-section">
                    <div>{this.props.location.state.title}</div>
                </section>
                <section className="info-section">
                    <div className="content-text">
                        {this.props.location.state.text ? <div>{ReactHtmlParser(this.props.location.state.text)}</div> : null}
                    </div>
                    <div>
                        like: {this.props.location.state.like}
                    </div>
                </section>
            </div>
        )
    }
}
export default Postinfo