import changedSpecialLogo from '../../images/logos/changedSpecial.webp';
import colin from '../../images/game-characters/Colin.webp';
import puro from '../../images/game-characters/Puro.webp';

function ChangedSpecial(props) {

    return (
        <main className="container pb-3 displayed-content">
            <div id="main-logo">
                <img className="img-fluid mx-auto d-block" src={changedSpecialLogo} alt="changed logo" />
            </div>
            <p id="main-description" class="lead text-center m-4 literal-string-format">
                {props.locale.special.description}
            </p>
            <div id="changed-characters" className="d-flex flex-row flex-wrap justify-content-between position-absolute hide-on-ms">
                <div className="mt-5 ms-5">
                    <img className="img-fluid" src={colin} alt="colin" />
                </div>
                <div className="me-5">
                    <img className="img-fluid" src={puro} alt="puro" />
                </div>
            </div>
            <div id="steam-section">
                <h3 className="display-3 text-center">{props.locale.steam}</h3>
                <div id="steam-section-widget" className="text-center">
                    <iframe className="img-fluid mx-auto d-block" src="https://store.steampowered.com/widget/814540/" frameborder="0" title="steam store page"></iframe>
                </div>
            </div>
        </main>
    );
}

export default ChangedSpecial;