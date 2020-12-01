import './Upload.css';
import { Component } from 'react';
import SimpleMDE from "react-simplemde-v1";

class Upload extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: null,
            textValue: ''
        }
    }
   
    handleTitleChange = (e) => {
        this.setState({ title: e.target.value });
        console.log(document.querySelector('.CodeMirror-code'));
    };
    handleValueChange = (event) => {
        this.setState({ textValue: event.target.value });
    };

    handleSubmit = () => {

    }

    render(){
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
                    <button value='submit' onClick={()=>this.handleSubmit}></button>
                </section>
            </div>
        )
    }
}
export default Upload