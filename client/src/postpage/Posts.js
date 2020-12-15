import './Posts.css';
import { Component } from 'react';
import Postlist from "./Postlist";
import Filter from "./Filter";
import axios from 'axios';

class Posts extends Component {
    state = {
        postdata: null,
        showdata: null,
        saveAlldata: null,
        list: true,
        number: 9,
        location: '',
        resultLoc: null,
    }
    componentDidMount = () => {
        if (this.state.resultLoc === null) {
            axios.get('http://localhost:8080/list', {
            }, { withCredentials: true })
            .then((result) => {
                this.setState({ saveAlldata: result.data.posts, postdata: result.data.posts, showdata: result.data.posts.slice(0, this.state.number) });
            })
            .catch(err => {
                this.setState({
                    error: '사진이 없습니다'
                })
            })
        }
    }

    ClickFilterLike = () => {
        if (this.state.postdata) {
            let arr = this.state.postdata.sort((a, b) => b.likes - a.likes)
            this.setState({ postdata: arr, showdata: arr.slice(0, 9), number: 9 })
        }
    }
    ClickFilterRecent = () => {
        if (this.state.postdata) {
            let arr = this.state.postdata.sort((a, b) => b.id - a.id)
            this.setState({ postdata: arr, showdata: arr.slice(0, 9), number: 9 })
        }
    }

    ClickFilterLocation = () => {
        axios.post('http://localhost:8080/posts/search', {
            address: document.querySelector(".input-box").value,
        }, { withCredentials: true })
            .then((result) => {
                this.setState({ postdata: result.data.posts, showdata: result.data.posts.slice(0, 9), number: 9, resultLoc: document.querySelector(".input-box").value });
            })
            .catch(err => {
                this.setState({
                    error: '사진이 없습니다'
                })
            })
    }

    ClickFilterList = () => {
        this.setState({ list: !this.state.list })
    }
    ClickShowMore = () => {
        this.setState({ number: this.state.number + 9, showdata: this.state.saveAlldata.slice(0, this.state.number + 9) })
    }

    handleInputChange = (e) => {
        this.setState({
            location: e.target.value,
        });
    }

    render() {
        return (
            <div>
                <section className="rec-section">
                    <div></div>
                </section>

                <section className="list-section">
                    <div>
                        <div className="number-posts">
                            총 {this.state.postdata !== null ? this.state.postdata.length : 0}개의 결과
                        </div>
                        <div className="location-posts">
                            {this.state.resultLoc === null ? '전국' : this.state.resultLoc}에서의 차박 장소
                        </div>
                        <div>
                            <Filter
                                ClickFilterLike={this.ClickFilterLike}
                                ClickFilterRecent={this.ClickFilterRecent}
                                ClickFilterList={this.ClickFilterList}
                                handleInputChange={this.handleInputChange}
                                ClickFilterLocation={this.ClickFilterLocation}
                                state={this.state} />
                        </div>
                    </div>
                    <div className="map-post">
                        {this.state.showdata !== null ? this.state.showdata.map((v) => {
                            return (<div key={v.id}><Postlist postdata={v} list={this.state.list} /></div>)
                        }) : null}
                    </div>
                    <div className="show-div">
                        {document.cookie ? <a className='upload-button' href="/upload">업로드</a> : <div className='upload-blank'></div>}
                        {this.state.postdata !== null && this.state.postdata.length > this.state.number
                            ? <button className="show-button" onClick={this.ClickShowMore}>더보기</button> : null}
                    </div>
                </section>
                <div>
                </div>
            </div>
        )
    }
}
export default Posts