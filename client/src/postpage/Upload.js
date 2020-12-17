import './Upload.css';
import { Component } from 'react';
import axios from 'axios';
import { IMGBB_API_KEY } from '../config/config';
import ReactQuill, { Quill } from 'react-quill';
import { ImageUpload } from 'quill-image-upload';
import { ImageResize } from 'quill-image-resize-module';
import 'react-quill/dist/quill.snow.css';
import Postcode from './Postcode';

Quill.register('modules/ImageResize', ImageResize);
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
            open: false,
            error: ''
        }
    }
    componentDidMount = () => {
        if (this.props.location.state !== undefined) {
            this.setState({
                title: this.props.location.state.postdata.title,
                textValue: this.props.location.state.postdata.text,
                address: this.props.location.state.postdata.address,
            })
            document.querySelector('.upload-title').value = this.props.location.state.postdata.title;
            document.querySelector('.ql-editor').innerHTML = this.props.location.state.postdata.text;
            document.querySelector('.inputbox').value = this.props.location.state.postdata.address
        } else {
            this.setState({
                title: null,
                textValue: null,
                address: null,
            })
        }

    }
    handleTitleChange = (e) => {
        this.setState({ title: e.target.value });
    };
    handleEdit = () => {
        let text = this.state.textValue;
        let thumbnail = null;
        let front = null;
        let end = null;
        if (text === null) {
            thumbnail = null;
        } else {
            let num = text.indexOf('<img src=');
            if (num !== -1) {
                front = text.slice(num);
                end = front.indexOf('>');
                thumbnail = front.slice(10, end - 1).split(' ')[0];
            } else {
                thumbnail = null;
            }
        }
        let address = document.querySelector('#address').value;
        let location = address.split(' ');
        this.setState({ thumbnail: thumbnail, address: address, location: location[0] });
        let sendSever = () => {
            if (!this.state.title) {
                this.setState({
                    error: '제목을 입력하세요', click: true
                });
            } else {
                this.setState({ error: '' });
                axios.post("https://wonderful-travler.net/post/update", {
                    id: this.props.location.state.postdata.id,
                    title: this.state.title,
                    textValue: this.state.textValue,
                    location: this.state.location,
                    address: document.querySelector('#address').value,
                    thumbnail: thumbnail
                }, { withCredentials: true })
                    .then((result) => {
                        this.props.history.push('/')
                        // `/post/info/${result.data.id}`
                    })
                    .catch(err => {
                        this.setState({
                            error: '모든 칸을 입력해주세요'
                        })
                    })
            }
        }
        if (this.state.title === null) {
            this.setState({
                error: '제목을 입력해주세요'
            })
        } else if (this.state.textValue === null) {
            this.setState({
                error: '내용을 입력해주세요'
            })
        } else {
            sendSever();
        }
    }

    handleSubmit = () => {
        let text = this.state.textValue;
        let thumbnail = null;
        let front = null;
        let end = null;
        if (text === null) {
            thumbnail = null;
        } else {
            let num = text.indexOf('<img src=');
            if (num !== -1) {
                front = text.slice(num);
                end = front.indexOf('>');
                thumbnail = front.slice(10, end - 1).split(' ')[0];
            } else {
                thumbnail = null;
            }
        }
        let address = document.querySelector('#address').value;
        let location = address.split(' ');
        this.setState({ thumbnail: thumbnail, address: address, location: location[0] });
        let sendSever = () => {
            if (!this.state.title) {
                this.setState({
                    error: '제목을 입력하세요', click: true
                });
            } else {
                this.setState({ error: '' });
                axios.post("https://wonderful-travler.net/post/upload", {
                    title: this.state.title,
                    textValue: this.state.textValue,
                    location: this.state.location,
                    address: document.querySelector('#address').value,
                    thumbnail: thumbnail
                }, { withCredentials: true })
                    .then((result) => {
                        this.props.history.push('/')
                        // `/post/info/${result.data.id}`
                    })
                    .catch(err => {
                        this.setState({
                            error: '요청에 실패하였습니다'
                        })
                    })
            }
        }
        if (this.state.title === null) {
            this.setState({
                error: '제목을 입력해주세요'
            })
        } else if (this.state.textValue === null) {
            this.setState({
                error: '내용을 입력해주세요'
            })
        } else {
            sendSever();
        }
    }

    handleChange = (value) => {
        this.setState({ textValue: value })
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
        this.setState({ open: false })
    }
    render() {
        return (
            <div>
                <section className="upload-top">
                    <div></div>
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
                                    ImageResize: {
                                        displaySize: true
                                    },
                                    toolbar: {
                                        container: [
                                            [{ font: [] }],
                                            [{ size: [] }],
                                            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                            [{ 'color': [] }, { 'background': [] }],
                                            [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
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
                        <div className="formbox">
                            <input id='address' className="inputbox" type="text" readOnly />
                            <div>
                                <button className="addbutton" onClick={() => { this.setState({ open: true }) }}>검색</button>
                            </div>
                        </div>
                        <Postcode open={this.state.open} close={this.modalClose} />
                        {this.props.location.state === undefined ?
                            <button className="submit-button" onClick={this.handleSubmit}>업로드</button> :
                            <button className="submit-button" onClick={this.handleEdit}>수정</button>}
                    </div>
                    <div className="error-msg">
                        {this.state.error.length === 0 ? <div></div> : <div>{this.state.error}</div>}
                    </div>
                </section>
            </div>
        )
    }
}
export default Upload