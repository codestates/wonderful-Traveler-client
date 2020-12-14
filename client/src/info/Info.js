import './Info.css';
import { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Info extends Component {
    componentDidMount = () => {
        AOS.init();
    }
    render() {
        return (
            <div>
                <section className="inf-section">
                </section>
                <section className="infomation-section">
                    <div className='header-title'>차박이란</div>
                    <div>
                        <div data-aos='fade-bottom' className="article-input">여행할 때에 자동차에서 잠을 자고 머무른다는 뜻으로 차박 캠핑의 최대 장점은 텐트를 치는 단계가 생략되기 때문에 차만 있으면 어디서든 먹고 잘 수 있다는 것! 게다가 올초까지만 해도 차량을 개조하는 것이 법적으로 불가능했지만 지난 2월 국토교통부에서 캠핑용 자동차 활성화를 위해 캠핑카 튜닝 대상을 승합차에서 승용, 화물, 특수차량 등 모든 차종으로 확대해 이제 누구나 차박 캠핑을 즐길 수 있게 되었습니다.</div>
                        <div className="header-name">차박캠핑의 여러가지 방법들</div>
                        <div data-aos='fade-bottom' className="input-header">차량 뒷좌석 개조</div>
                        <div data-aos='fade-bottom' className="article-input">차량 의자의 시트를 접어 평탄하게 만든 뒤 단단한 에어 매트리스나 프레임을 설치하여 자신만의 스타일로 뒷좌석을 개조하는 방식. 누울 수 있는 공간에 여유를 주려면 승용차보다는 SUV 소지자가 유리합니다. 특히 의자를 펼치거나 접었을 때 완전히 평탄하게 되는 차량이 차박 캠핑에 적합합니다.</div>
                        <div className="img-div">
                            <img data-aos='fade-bottom' src="../back.jpg" alt="img"></img>
                        </div>
                        <div data-aos='fade-bottom' className="input-header">루프탑 텐트 설치</div>
                        <div data-aos='fade-bottom' className="article-input">만약 내부 공간에 여유가 없다면 루프탑 텐트를 설치하는 것이 좋습니다. 차량 위에 설치하는 루프탑 텐트는 단단한 하드케이스를 열면 텐트가 자동으로 펼쳐지는 하드탑과 케이스 없이 장비를 묶어둬 풀면 텐트가 펼쳐지는 소프트탑 등 여러 가지 종류가 있습니다. 단점은 사다리를 통해 오르내려야 하는 불편함이 있으며 한 번 설치하면 차량 이동이 쉽지 않습니다.</div>
                        <div className="img-div">
                            <img data-aos='fade-right' src="../hardtop.png" alt="img"></img>
                            <img data-aos='fade-left' src="../softtop.png" alt="img"></img>
                        </div>
                        <div className="header-name">차박캠핑 시 주의사항</div>
                        <div data-aos='fade-bottom' className="input-header">화재</div>
                        <div data-aos='fade-bottom' className="article-input">차박캠핑 중 음식조리를 하거나 난방을 할 때 불을 자주 사용하게 되는데 자칫 불이 날 수 있으니 조심해야 합니다. 혹시 모를 상황에 대비해 휴대용 소화기를 반드시 구비하는 것이 좋습니다.</div>
                        <div data-aos='fade-bottom' className="input-header">일산화탄소 중독</div>
                        <div data-aos='fade-bottom' className="article-input">밀폐된 차량 내부에서 숯불이나 가스랜턴 등을 지속적으로 피울 시 일산화탄소 중독에 이를 수 있으니 주의해야 합니다. 텐트 내에서는 최대한 화기 사용을 금하고 잠들기 전에는 꼭 환기구를 충분히 확보하는 것이 좋습니다.</div>
                        <div data-aos='fade-bottom' className="input-header">폭우</div>
                        <div data-aos='fade-bottom' className="article-input">여름철 물가에서 차박캠핑을 한다면 갑작스러운 폭우에 대비해야 합니다. 만수 선 위쪽으로 자리를 잡을 것을 추천.</div>
                        <div data-aos='fade-bottom' className="input-header">사유지 확인</div>
                        <div data-aos='fade-bottom' className="article-input">무작정 떠난 나만의 차박캠핑 장소가 개인 사유지일 수 있으니 꼭 확인할 것. 일반적으로 차박캠핑도 정해진 캠핑장소에서 하는 것이 가장 좋습니다.</div>
                        <div data-aos='fade-bottom' className="input-header">화장실</div>
                        <div data-aos='fade-bottom' className="article-input">차박캠핑은 어디서든 캠핑을 즐길 수 있다는 장점이 있지만 주변에 화장실이 없다면 불편합니다. 이 때문에 주변에 공중 화장실이 있는지 미리 파악해야 합니다.</div>
                        <div className="header-name">추천! 차박하기 좋은 장소</div>
                        <a href="/posts"><span className="car-posts">차박의 민족</span></a>
                        <span data-aos='fade-bottom' className="article-input">을 통해 다양한 차박장소를 알아보세요</span>
                    </div>
                    <div className="camefrom">
                        <span>출처: </span><span><a href="junsungki.com/magazine/post-detail.do?id=2823#:~:text=차박이란%2C%20여행할,먹고%20잘%20수%20있다는%20것!">junsungki.com/</a></span>
                    </div>
                </section>
            </div>
        )
    }
}
export default Info