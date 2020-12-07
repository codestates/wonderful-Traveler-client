import './Upload.css';
import { Component } from 'react';
import axios from 'axios';
import { IMGBB_API_KEY } from '../config/config';
import ReactQuill, { Quill } from 'react-quill';
import { ImageUpload } from 'quill-image-upload';
import 'react-quill/dist/quill.snow.css';

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
            user: null
        }
    }

    handleTitleChange = (e) => {
        this.setState({ title: e.target.value });
    };

    handleLocationChange = (e) => {
        this.setState({ location: e.target.value });
    };

    handleAddressChange = (e) => {
        this.setState({ address: e.target.value });
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
        this.setState({ thumbnail: thumbnail })
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
                        <select onChange={this.handleLocationChange}>
                            <option></option>
                            <option>서울</option>
                            <option>경기</option>
                        </select>
                        <input onChange={this.handleAddressChange} placeholder="주소"></input>
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