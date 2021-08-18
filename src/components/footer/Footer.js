import locale from "../../locale/locale";

function Footer(props) {

    return (
        <footer className="footer pt-2 pb-4 mb-0 displayed-content">
            <div className="container">
                <div className="d-flex flex-row flex-wrap p-0 mb-0 justify-content-around">
                    <a href={"https://twitter.com/DragonSnow4"} className="footer-item">
                        <img alt="footer-badge" src={"https://img.shields.io/badge/-SnowDragon-3675ea?style=flat-square&logo=twitter&logoColor=white"} />
                    </a>
                    <a href={"https://www.patreon.com/DragonSnow"} className="footer-item">
                        <img alt="footer-badge" src={"https://img.shields.io/badge/-SnowDragon-A8131D?style=flat-square&logo=patreon&logoColor=white"} />
                    </a>
                    <p className="text-center">
                        {locale.footer.allrights}
                    </p>
                    <a href={"https://space.bilibili.com/753832"} className="footer-item">
                        <img alt="footer-badge" src={"https://img.shields.io/badge/-雪之龙-FFFFFF?style=flat-square&logo=bilibili&logoColor=blue"} />
                    </a>
                    <a href={"https://steamcommunity.com/profiles/76561198181374861"} className="footer-item">
                        <img alt="footer-badge" src={"https://img.shields.io/badge/-SnowDragon-1b2838?style=flat-square&logo=steam&logoColor=white"} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;