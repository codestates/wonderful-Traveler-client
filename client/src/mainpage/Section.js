import React from 'react';
import './Section.css';

const Section = () => {
    return (
        <div>
            <section className="first-section">
                <div></div>
            </section>
            <section className="second-section">
                <div className="about-camp">
                    <div className="camp-img">
                        <img src="https://i.ibb.co/TKzSFBB/camp.gif" alt="img"></img>
                    </div>
                    <div className="camp-img-comment">
                        차박의 밤은...
                    </div>
                </div>
            </section>
            <section className="third-section">

            </section>
        </div>
    );
}

export default Section;