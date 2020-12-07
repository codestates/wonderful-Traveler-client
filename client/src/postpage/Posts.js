import './Posts.css';
import { Component } from 'react';
import { fakedata } from './fakedata';
import Postlist from "./Postlist";
import Fillter from "./Fillter";

class Posts extends Component {
    state = {
        postdata: null
    }
    componentDidMount = () => {
        if (fakedata) {
            this.setState({ postdata: fakedata })
        }
    }

    ClickFillterLike = () => {
        if (this.state.postdata) {
            let arr = this.state.postdata.sort((a, b) => b.like - a.like)
            this.setState({ postdata: arr })
        }
    }
    ClickFillterRecent = () => {
        if (this.state.postdata) {
            let arr = this.state.postdata.sort((a, b) => a.id - b.id)
            this.setState({ postdata: arr })
        }
    }

    render() {
        return (
            <div>
                <section className="st-section">
                    <div>추천장소</div>
                </section>

                <section className="list-section">
                    <div>
                        <Fillter
                            ClickFillterLike={this.ClickFillterLike}
                            ClickFillterRecent={this.ClickFillterRecent} />
                    </div>
                    {this.state.postdata ? this.state.postdata.map((v) => {
                        return (<div className="post-list" key={v.id}><Postlist postdata={v} /></div>)
                    }) : null}
                </section>
                <div>
                    <a href="/upload">업로드</a>
                </div>
            </div>
        )
    }
}
export default Posts