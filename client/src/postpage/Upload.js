import './Upload.css';
import { Component } from 'react';
import axios from 'axios';
import { IMGBB_API_KEY } from '../config/config';
import ReactQuill, { Quill } from 'react-quill';
import { ImageUpload } from 'quill-image-upload';
import 'react-quill/dist/quill.snow.css';
import Postcode from './Postcode';

Quill.register('modules/imageUpload', ImageUpload);

class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            textValue: null,
            location: null,
            address: null,
            thumbnail: '',
            user: null,
            open: false
        }
    }

    handleTitleChange = (e) => {
        this.setState({ title: e.target.value });
    };

    handleSubmit = () => {
        console.log(this.state.textValue)
    }

    handleChange = (value) => {
        this.setState({ textValue: value })
    }

    handleSubmit = () => {
        let text = this.state.textValue;
        let num = text.indexOf('<img src=');
        let front = text.slice(num);
        let end = front.indexOf('>');
        let thumbnail = front.slice(10, end - 1);
        let address = document.querySelector('#address').value;
        let location = address.split(' ');
        this.setState({ thumbnail: thumbnail, address: address, location: location[0]})
    }

    imageHandler() {
        const input = document.createElement('input');

        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => {
            const file = input.files[0];
            const formData = new FormData();
            formData.set('key', IMGBB_API_KEY)
            formData.append('image', file);
            let img = await axios({
                method: 'post',
                url: 'https://api.imgbb.com/1/upload',
                data: formData
            }).then(res =>
                res.data.data.url
            )
            const range = this.quill.getSelection(true);
            this.quill.insertEmbed(range.index, 'image', `${window.location.origin}/images/loaders/placeholder.gif`);
            this.quill.setSelection(range.index + 1);
            this.quill.deleteText(range.index, 1);
            this.quill.insertEmbed(range.index, 'image', img);
        };
    }

    modalClose = () => {
        this.setState({open: false})
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <section className="st-section">
                    <div>업로드</div>
                </section>
                <section className="upload-section">
                    <input className="upload-title" placeholder="title" onChange={this.handleTitleChange}></input>
                    <div>
                        <div>
                            <ReactQuill
                                id="quill"
                                ref={el => {
                                    this.quill = el;
                                }}
                                onChange={this.handleChange}
                                modules={{
                                    toolbar: {
                                        container: [
                                            [{ font: [] }],
                                            [{ size: [] }],
                                            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                            [{ 'color': [] }, { 'background': [] }],
                                            [{ list: 'ordered' }, { list: 'bullet' }],
                                            ['link', 'image', 'video'],
                                            ['clean']
                                        ],
                                        handlers: {
                                            image: this.imageHandler
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <input id='address' type='text' placeholder="주소" readOnly></input>
                        <button onClick={()=>{this.setState({open:true})}}>주소찾기</button>
                        <Postcode open={this.state.open} close ={this.modalClose}/>
                    </div>
                    <button className="submit-button" onClick={this.handleSubmit}>버튼</button>
                    <div>
                        {this.state.textValue ? <div>{this.state.textValue}</div>
                            : null}

                    </div>
                </section>
            </div>
        )
    }
}
export default Upload