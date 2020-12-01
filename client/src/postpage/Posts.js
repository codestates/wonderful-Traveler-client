import './Posts.css';
import { Component } from 'react';

class Posts extends Component {
    render(){
        return(
            <div>
                <section className="st-section">
                    <div>추천장소</div>
                </section>
                <section className="list-section">
                    <a href="/upload">업로드</a>
                </section>
            </div>
        )
    }
}
export default Posts