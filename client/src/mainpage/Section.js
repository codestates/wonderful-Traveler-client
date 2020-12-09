import React from 'react';
import './Section.css';

const Section = () => {
    return (
        <>
        <section id="banner">
            <video id="videobcg" src="../mainVideo.mp4" autoPlay loop muted></video>
            <div className="mainView">
                <h1>차와 함께 자연과 가까워지는 시간, 차박의 민족</h1>
            </div>
        </section>
        <section className="section">
            <div className="secondSection">
                <h2>차만 있으면 언제 어디서나 떠나는 나의 여행</h2>
            </div>
            <img src="../mainSection.jpg" alt="img"></img>
            <div className="secondDescription">
                <p>코로나와 함께 거리두기를 하고 있는 요즘, 집안에 있기 답답한 사람들이 차를 이용해서 차박을 하는 경우가 늘어났다. 사람들에게 자신만의 차박 장소를 공유해 보세요.</p>
            </div>
        </section>
        <section className="sectionLast">
            <div className="lastSection">
                <h2>몰랐던 나만의 장소를 공유해보세요. 산, 바다, 섬, 계곡 어디든 좋습니다.</h2>
            </div>
            <img src="../mainSection0" alt="img"></img>
            <div className="lastSectionDescription">
                <p> 아침에 눈을 떴을때 볼 수 있는 다양한 풍경들을 공유해보세요.</p>
            </div>
        </section>
        </>
    );
}

export default Section;
