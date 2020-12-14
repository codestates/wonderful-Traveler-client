import './Postinfo.css';
import { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import LikeHeart from './LikeHeart';

class Postinfo extends Component {
    constructor() {
        super();
        this.state = {
            // noneLike :"https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2013/png/iconmonstr-thumb-10.png&r=171&g=171&b=171",
            // like : "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2013/png/iconmonstr-thumb-10.png&r=171&g=53&b=53",
            newReply: "",
            replies: [
                {
                    text: "",
                },
            ],
    };
    // this.handleClick = this.handleClick.bind(this);
}

// noneLike state 값은 사용자가 좋아요를 누르지 않는 기본 상태의 아이콘을 나타내는 state 값이고,
// like state 값은 사용자가 좋아요를 눌렀을 때 출력될 아이콘을 나타내는 state이다.
// render 부분에서 noneLike state 값을 변수로 변환해 주었다.


// input 글을 작성할 때 사용 일단 아무것도 없게 ""를 넣어주었고 newrely에 들어온 값을 replies에 담아준다.
// if()문 색 변경 
// is unlike : false;
// is like : true ; 
// white;

    // componentDidMount = () => {
    
    //this.setState({ saveAlldata: fakedata,})
     // axios.post('localhost:8080'/users/likes)

    // axios.get('asdfasdfasdf/list') {
        
    // }.then ((result) => {
    //     this.setState({ saveAlldata: fakedata,}) 이 fakedata는 result로 변경이 된다.
    // })
    // axios.get('ec2-15-164-38-202.ap-northeast-2.compute.amazonaws.com/user/info', 
    // { withCredentials: true }
    // )
    // .then((result)=>{
    //     this.setState({
    //     !like: false,
    //     userinfo: result.data
    //   })
    //   console.log(result.data)
    // })
    //}

    // info로 넘어올 수 있게 data들을 넘어올 수 있게 해주었다. -> postlist에서 data는 받지 않아도 된다. 
    // 그래서 받아야할 것은 comments를 따로 받아야 한다.

    // like, reply, edit write
    // user.id = button 보이고 else null

    // // componentDidMount() {
    //     const postId = this.props.match.params.data;

    //     this.getData(postId);
    //     this.getLikeInfo();
    // }

    // handleClick() {
    //     this.setState({
    //         noneLike : !this.state.noneLike
    //     });
    // }

    // getLikeInfo = async function () {
    //     const { userId, login } = this.props;
        
    //     // 로그인 된 상태에서 만 실행해야 한다.
    //     if(login) {
    //         const postId = this.props.match.params.data;
    //         const obj = { userId : userId, postId: postId }

    //         const getData = await axios('users/like', {
    //             method: 'POST',
    //             headers: new Headers(),
    //             data: obj
    //         })

    //         if(getData.data[0]) {
    //             this.setState({
    //                 likeExist : true,
    //                 likeNum : getData.data[0].likes
    //             })
    //         }
    //     }
    // };
    // type을 인자로 받아서 type 값이 true, false 에 따라 likeNum 값을 변경해주는 함수를 생성 
    // type이 true 일 때, + 1 증가 false 일 때, -1 증가 

    // getAllLike = function(type) {

    //     const { data } = this.state;

    //     if( type === 'true') {
    //         this.setState({ likeNum : data.data[0].like + 1 })
    //     } else if (type === 'false') {
    //         this.setState({ likeNum : data.data[0].like - 1 })
    //     }
    // }

    // res.status.send(“true”);
    // res.status.send(“false”);


    // 댓글 기능 //
    // input에 onchange를 넣어 state의 newreply: ""를 setState로 인해 작성한 값을 newRely에 벨류 값으로 들어오게 만들었다.
    textChange = (e) => {
        this.setState({
            newReply: e.target.value,
        });
    };
    
    add = () => { // Button 요소의 onClick 이벤트 핸들러
        let arr = this.state.replies;
        arr.push({
            article: this.state.newReply,
        });
        this.setState({
            replies: arr,
            newReply: "",
        });
    };
    
    pressEnter = (e) => {
        if (e.key === "Enter" && this.state.newReply) {
            this.add();
            e.target.value = "";
        }
    };

    render() {
        
        return (
            <div>
                <section className="top-section">
                </section>
                <section className="infoSection">
                    <h1 className="contentTitle">
                        {this.props.location.state.title}
                    </h1>
                    <div className="contentText">
                        {this.props.location.state.text ? 
                            <div>{ReactHtmlParser(this.props.location.state.text)}
                            </div> : null}
                    </div>
                </section>
                <div className="otherDiv">
                    <LikeHeart />
                </div>
                <section className="replyDiv">
                    <h4> COMMENT </h4>
                    <div>
                        <ul className="textbox">
                            {this.state.replies.map((el) => (
                            <li>{el.article}</li>
                            ))}
                        </ul>
                    </div>
                        <div>
                            <input
                                type="text"
                                placeholder="댓글달기..."
                                onChange={this.textChange}
                                onKeyPress={this.pressEnter}
                                value={this.state.newReply}
                            />
                            <button id="replySubmitButton"onClick={this.add}>댓글 등록</button>
                        </div>
                </section>
            </div>
        )
    }
}

export default Postinfo


// DB를 작성해서 댓글이 새로고침할때 날라가지 않고 저장되고 기록되어있어야 한다.
// 스키마를 보고 이해한 것을 정리해 본다.
// commentId-> userid, textvalue