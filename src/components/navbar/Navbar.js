import usflag from '../../images/us.webp';
import chflag from '../../images/ch.webp';
import puroSweep from '../../images/puroSweeping.gif';

function Navbar(props) {

    return (
        <header className="displayed-content py-3 d-flex flex-row no-selectable">
            <div id="nav-primary" className="d-flex flex-row justify-content-around flex-wrap">
                <div className="d-flex flex-row justify-content-center flex-wrap">
                    <div className="navbar-button mx-3 my-auto" style={props.location === "changed" ? { color: "white" } : {}} onClick={() => props.setLocation('changed')}>{props.locale.navbar.changed}</div>
                    <div className="navbar-button mx-3 my-auto" style={props.location === "changedSpecial" ? { color: "white" } : {}} onClick={() => props.setLocation('changedSpecial')}>{props.locale.navbar.changedSpecial}</div>
                    <div className="navbar-button mx-3 my-auto" style={props.location === "about" ? { color: "white" } : {}} onClick={() => props.setLocation('about')}>{props.locale.navbar.about}</div>
                </div>
                <div className="d-flex flex-row justify-content-center flex-wrap">
                    <div className="navbar-text mx-2">{props.locale.navbar.language}</div>
                    <div className="d-flex flex-row justify-content-center flex-wrap">
                        <div className="navbar-flag mx-2 my-auto">
                            <img src={usflag} style={props.locale.getLanguage() === "en" ? { "border": "white 1px solid" } : {}} onClick={() => props.changeLocale('en')} alt="us flag" />
                        </div>
                        <div className="navbar-flag mx-2 my-auto">
                            <img src={chflag} style={props.locale.getLanguage() === "cn" ? { "border": "white 1px solid" } : {}} onClick={() => props.changeLocale('cn')} alt="chinesse flag" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;