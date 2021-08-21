import locale from "../../locale/locale";
import puroSweep from '../../images/general/puroSweeping.gif';

function Footer(props) {

    return (
        <footer className="footer pb-4 displayed-content no-selectable">
            <div className="container">
                <div className="d-flex flex-row flex-nowrap p-0 mb-0 justify-content-around">
                    <div className="d-flex flex-row flex-wrap justify-content-center">
                        <a href={"https://twitter.com/DragonSnow4"} className="footer-item pt-1 mx-3 my-auto">
                            <img alt="footer-badge" src={"https://img.shields.io/badge/-SnowDragon-3675ea?style=flat-square&logo=twitter&logoColor=white"} />
                        </a>
                        <a href={"https://www.patreon.com/DragonSnow"} className="footer-item pt-1 mx-3 my-auto">
                            <img alt="footer-badge" src={"https://img.shields.io/badge/-SnowDragon-A8131D?style=flat-square&logo=patreon&logoColor=white"} />
                        </a>
                    </div>
                    <div id="footer-copyright-notices" className="d-flex flex-row flex-wrap justify-content-center">
                        <div className="text-end mt-auto hide-on-ms">
                            {locale.footer.copyrightnotice}
                        </div>
                        <div id="puro-sweeping" className="img-fluid d-block hide-on-ms">
                            <img src={puroSweep} alt="puro sweeping hide-on-ms" />
                        </div>
                        <div className="mt-auto hide-on-ms">
                            {locale.footer.allrightsnotice}
                        </div>
                        <div className="mt-auto d-none text-center" id="full-copyright-notice">
                            {locale.footer.fullnotice}
                        </div>
                    </div>
                    <div className="d-flex flex-row flex-wrap justify-content-center">
                        <a href={"https://space.bilibili.com/753832"} className="footer-item pt-1 mx-3 my-auto">
                            <img alt="footer-badge" src={"https://img.shields.io/badge/-󠀡󠀡󠀡雪之龙󠀡󠀡󠀡󠀡󠀡-F2F2F2?style=flat-square&logo=bilibili&logoColor=blue"} />
                        </a>
                        <a href={"https://steamcommunity.com/profiles/76561198181374861"} className="footer-item pt-1 mx-3 my-auto">
                            <img alt="footer-badge" src={"https://img.shields.io/badge/-SnowDragon-1b2838?style=flat-square&logo=steam&logoColor=white"} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;