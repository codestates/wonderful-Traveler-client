import './Fillter.css';
import React from 'react';

const Fillter = (props) => {
    let recommand = [];
    let recommandLocation = [];
    if (props.state.saveAlldata !== null) {
        for (let i = 0; i < props.state.saveAlldata.length; i++) {
            recommand.push(props.state.saveAlldata[i].address);
        }
        for (let j = 0; j < recommand.length; j++) {
            if (recommand[j].indexOf(props.state.location) !== -1) {
                recommandLocation.push(recommand[j]);
            }
        }
    }

    let rec = [...new Set(recommandLocation)].slice(0, 5);
    console.log(rec);
    return (
        <div className="fillter">
            <div className="form-control">
            <input
                className="input-box"
                type="text"
                placeholder="주소 검색"
                onChange={props.handleInputChange}
            />
            <div>
                <button className="loc-button"onClick={props.ClickFillterLocation}>검색</button>
            </div>
            </div>
            <div className="recommand">
                {(rec[0] && props.state.location !== '') ? <h3>추천장소</h3> : null}
                {(rec[0] && props.state.location !== '') ? (rec).map((location, index) => (
                    <div key={index} className="map-location"
                    onClick={()=>{
                        document.querySelector(".input-box").value = location;
                        props.ClickFillterLocation();
                    }}>{location}</div>)) : null}
            </div>
            <button className="fillter-button" onClick={props.ClickFillterList}>{props.state.list ? '사진' : '리스트'}</button>
            <button className="fillter-button" onClick={props.ClickFillterRecent}>최신순</button>
            <button className="fillter-button" onClick={props.ClickFillterLike}>좋아요순</button>
        </div>
    )
}
export default Fillter