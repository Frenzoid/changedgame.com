import dragonSnowAvatar from '../../images/DragonSnow.webp';

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
            <p id="changed-description" className="lead text-center mt-4">
                {props.locale.about.description}
            </p>
        </main>
    );
}

export default About;