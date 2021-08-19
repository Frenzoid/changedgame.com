// Import of the image lightbox library
import { SRLWrapper } from "simple-react-lightbox";

// Importing all images
import dragonSnowAvatar from '../../images/DragonSnow.webp';
import gs1j from '../../images/game-screenshot-1.jpg';
import gs1w from '../../images/game-screenshot-1.webp';
import gs2j from '../../images/game-screenshot-2.jpg';
import gs2w from '../../images/game-screenshot-2.webp';
import gs3j from '../../images/game-screenshot-3.jpg';
import gs3w from '../../images/game-screenshot-3.webp';
import gs4j from '../../images/game-screenshot-4.jpg';
import gs4w from '../../images/game-screenshot-4.webp';
import gs5j from '../../images/game-screenshot-5.jpg';
import gs5w from '../../images/game-screenshot-5.webp';
import gs6j from '../../images/game-screenshot-6.jpg';
import gs6w from '../../images/game-screenshot-6.webp';
import gs7j from '../../images/game-screenshot-7.jpg';
import gs7w from '../../images/game-screenshot-7.webp';
import gs8j from '../../images/game-screenshot-8.jpg';
import gs8w from '../../images/game-screenshot-8.webp';

function About(props) {

    return (
        <main className="container pb-3 displayed-content" id="about-main">
            <div className="d-flex flex-row flex-wrap justify-content-center">
                <div id="dragonSnow-logo">
                    <img className="img-fluid d-block ms-4" src={dragonSnowAvatar} alt="DragonSnow Avatar logo" />
                </div>
                <div className="lead d-flex flex-column flex-wrap m-auto px-2 pt-4 social-container">
                    <p className="text-warning">
                        {props.locale.about.name}
                    </p>
                    <a href="https://www.patreon.com/DragonSnow">
                        patreon.com/DragonSnow
                    </a>
                    <a href="https://steamcommunity.com/profiles/76561198181374861">
                        steamcommunity.com/SnowDragon
                    </a>
                </div>
                <div className="lead d-flex flex-column flex-wrap m-auto px-2 pt-4 social-container">
                    <a href="https://twitter.com/DragonSnow4">
                        twitter.com/DragonSnow4
                    </a>
                    <a href="https://www.furaffinity.net/user/drdragontim/">
                        furaffinity.net/drdragontim/
                    </a>
                    <a href="https://space.bilibili.com/753832">
                        bilibili.com/雪之龙
                    </a>
                </div>
            </div>
            <p className="lead text-center mt-4">
                {props.locale.about.description}
            </p>
            <hr></hr>
            <p className="lead text-start m-4 formatted-string">
                {props.locale.about.gamedescription}
            </p>
            <SRLWrapper>
                <div className="d-flex flex-row flex-wrap justify-content-around game-screenshots pt-4">

                    <div className="m-2">
                        <a href={gs1j} data-id="changed1" data-group="changed">
                            <img width="100%" src={gs1w}
                                alt="" />
                        </a>
                    </div>
                    <div className="m-2">
                        <a href={gs2j} data-id="changed2" data-group="changed">
                            <img width="100%" src={gs2w}
                                alt="" />
                        </a>
                    </div>
                    <div className="m-2">
                        <a href={gs3j} data-id="changed3" data-group="changed">
                            <img width="100%" src={gs3w}
                                alt="" />
                        </a>
                    </div>
                    <div className="m-2">
                        <a href={gs4j} data-id="changed4" data-group="changed">
                            <img width="100%" src={gs4w}
                                alt="" />
                        </a>
                    </div>
                    <div className="m-2">
                        <a href={gs5j} data-id="changed5" data-group="changed">
                            <img width="100%" src={gs5w}
                                alt="" />
                        </a>
                    </div>
                    <div className="m-2">
                        <a href={gs6j} data-id="changed6" data-group="changed">
                            <img width="100%" src={gs6w}
                                alt="" />
                        </a>
                    </div>
                    <div className="m-2">
                        <a href={gs7j} data-id="changed7" data-group="changed">
                            <img width="100%" src={gs7w}
                                alt="" />
                        </a>
                    </div>
                    <div className="m-2">
                        <a href={gs8j} data-id="changed8" data-group="changed">
                            <img width="100%" src={gs8w}
                                alt="" />
                        </a>
                    </div>
                </div>
            </SRLWrapper>
        </main>
    );
}

export default About;