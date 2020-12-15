import { Component } from 'react';
import './Section.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Section extends Component {
    componentDidMount = () => {
        AOS.init();
    }

    render() {
        return (
            <>
                <section id="banner">
                    <video id="videobcg" src="../mainVideo.mp4" autoPlay loop muted></video>
                    <div className="mainView">
                        <div className="text-view">차와 함께 자연과 가까워지는 시간</div>
                        <a href='/info'><h1>차박의 민족</h1></a>
                    </div>
                </section>
                <section className="sections">
                    <div className="secondSection">
                        <div>
                            <img data-aos='fade-right' src="../mainSection.jpg" alt="img"></img>
                        </div>
                        <article data-aos='fade-left'>
                            <h2>차만 있으면</h2>
                            <h4>떠날 수 있습니다</h4>
                            <h4>언제 어디서든 떠나는 나의 여행</h4>
                        </article>
                        <div>
                            <img data-aos='fade-left' src="../mainSection1.jpg" alt="img"></img>
                        </div>
                    </div>

                    <div className="secondMiddle">
                        <article data-aos='fade-bottom'>
                            <h2>자연이 만든</h2>
                            <h4>아늑함을 느껴보세요.</h4>
                            <h4>단 하루라도 우리의 밤은 아름다울 필요가 있습니다.</h4>
                        </article>
                        <div>
                            <img data-aos='fade-bottom' src="../mainSectiongif.gif" alt="img"></img>
                        </div>
                    </div>

                    <div className="secondDescription">
                        <article data-aos='fade-right'>
                            <h2>나만의 장소를</h2>
                            <h4>공유해보세요.</h4>
                            <h4>산, 바다, 섬, 계곡 어디든 좋습니다</h4>
                        </article>
                        <div>
                            <img data-aos='fade-left' src="../mainSection3.jpg" alt="img"></img>
                        </div>
                        <div>
                            <img data-aos='fade-right' src="../mainSection2.jpg" alt="img"></img>
                        </div>
                        <span>
                            <img data-aos='fade-left' src="../mainSection4.jpg" alt="img"></img>
                        </span>
                    </div>
                </section>
            </>
        );
    }
}

export default Section;
