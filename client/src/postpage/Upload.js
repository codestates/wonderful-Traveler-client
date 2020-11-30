import './Upload.css';
import { Component } from 'react';
import SimpleMDE from "react-simplemde-v1";

class Upload extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: null,
            textValue: null
        }
    }
   
    handleTitleChange = (e) => {
        this.setState({ title: e.target.value });
        console.log(this.state);
    };
    handleValueChange = (instance) => {
        this.setState({ textValue: instance.value() });
    };

    handleSubmit = () => {

    }
    getIntance = (instance) => {
        // You can now store and manipulate the simplemde instance. 
        instance.togglePreview();
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
                        getMdeInstance= { this.getInsance }
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