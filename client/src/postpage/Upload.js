import './Upload.css';
import { Component } from 'react';
import SimpleMDE from "react-simplemde-v1";
import Showdown from 'showdown';
import ReactHtmlParser from 'react-html-parser';

class Upload extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: null,
            textValue: null,
            location: null
        }
    }
   
    handleTitleChange = (e) => {
        this.setState({ title: e.target.value });
    };

    handleSubmit = () => {
        let text = document.querySelector('.CodeMirror-code').children;
        let arr = [];
        let converter = new Showdown.Converter();
        for(let i in text){
            if(text[i].innerText){
                let t = converter.makeHtml(text[i].innerText);
                arr.push(t);
            }
        }
        this.setState({ textValue: arr });
    }

    render(){
        console.log(this.state)
        return(
            <div>
                <section className="st-section">
                    <div>업로드</div>
                </section>
                <section className="upload-section">
                    <input className="upload-title" placeholder="title" onChange={this.handleTitleChange}></input>
                    <div>
                        <SimpleMDE className="MDE"
                            onChange={this.handleValueChange}
                            value={this.state.textValue} />
                    </div>
                    <button className="submit-button" onClick={this.handleSubmit}>버튼</button>
                    <div>
                    {this.state.textValue ? <div>{this.state.textValue.map(v => {
                        return ReactHtmlParser(v)
                    })}</div>
                    : null}
                    </div>
                </section>
            </div>
        )
    }
}
export default Upload