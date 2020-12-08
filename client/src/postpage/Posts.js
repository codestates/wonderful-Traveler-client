import './Posts.css';
import { Component } from 'react';
import { fakedata } from './fakedata';
import Postlist from "./Postlist";
import Fillter from "./Fillter";

class Posts extends Component {
    state = {
        postdata: null,
        showdata: null,
        saveAlldata: null,
        list: true,
        number: 9,
        location: '',
        resultLoc: '',
    }
    componentDidMount = () => {
        if (fakedata) {
            this.setState({ saveAlldata: fakedata, postdata: fakedata, showdata: fakedata.slice(0,this.state.number) })
        }
    }

    ClickFillterLike = () => {
        if (this.state.postdata) {
            let arr = this.state.postdata.sort((a, b) => b.like - a.like)
            this.setState({ postdata: arr, showdata: arr.slice(0,9), number: 9 })
        }
    }
    ClickFillterRecent = () => {
        if (this.state.postdata) {
            let arr = this.state.postdata.sort((a, b) => b.id - a.id)
            this.setState({ postdata: arr, showdata: arr.slice(0,9), number: 9 })
        }
    }

    ClickFillterLocation = () => {
        let arr = [];
        for(let i =0; i <this.state.saveAlldata.length; i++){
            if(this.state.saveAlldata[i].address.indexOf(this.state.location) !== -1){
                arr.push(this.state.saveAlldata[i]);
            }
        }
        this.setState({postdata: arr, showdata: arr.slice(0, 9), number: 9, resultLoc: document.querySelector(".input-box").value})
    }

    ClickFillterList =() => {
        this.setState({list: !this.state.list})
    }
    ClickShowMore = () => {
        this.setState({number: this.state.number+9, showdata: this.state.saveAlldata.slice(0, this.state.number+9)})
    }

    handleInputChange= (e)=> {
        this.setState({
          location: e.target.value,
        });
      }

    render() {
        console.log(this.state)
        return (
            <div>
                <section className="st-section">
                    <div>추천장소</div>
                </section>

                <section className="list-section">
                    <div>
                        <div className="number-posts">
                            총 {this.state.postdata !== null ? this.state.postdata.length : 0}개의 결과
                        </div>
                        <div className="location-posts">
                            {this.state.resultLoc.length === 0 ? '전국' : this.state.resultLoc}에서의 차박 장소
                        </div>
                        <div>
                        <Fillter
                            ClickFillterLike={this.ClickFillterLike}
                            ClickFillterRecent={this.ClickFillterRecent}
                            ClickFillterList={this.ClickFillterList}
                            handleInputChange={this.handleInputChange}
                            ClickFillterLocation={this.ClickFillterLocation}
                            state={this.state} />
                        </div>
                    </div>
                    <div className="map-post">
                    {this.state.showdata ? this.state.showdata.map((v) => {
                        return (<div key={v.id}><Postlist postdata={v} list={this.state.list} /></div>)
                    }) : null}
                    </div>
                    <div className="show-div">
                    <a className='upload-button' href="/upload">업로드</a>
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