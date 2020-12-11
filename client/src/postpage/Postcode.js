import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import "./Postcode.css"

const Postcode = (props) => {

    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
            document.querySelector('#address').value = fullAddress;
            props.close();
        }

        console.log(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    }
    return (
        <div>
            {props.open ? (
                <div className="modal-window">
                    <div className="signModal">
                        <span className="close" onClick={props.close}>
                            X
              </span>
                        <div className="modalDefault" >
                            <DaumPostcode onComplete={handleComplete} />
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
export default Postcode;