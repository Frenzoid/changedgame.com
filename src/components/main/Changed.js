import changedLogo from '../../images/logos/changed.webp';
import colin from '../../images/game-characters/Colin.webp';
import puro from '../../images/game-characters/Puro.webp';

function Changed(props) {

    return (
        <main className="container pb-3 displayed-content">
            <div id="main-logo">
                <img className="img-fluid mx-auto d-block" src={changedLogo} alt="changed logo" />
            </div>
            <div id="main-video" className="mt-3" >
                <iframe className="img-fluid mx-auto d-block" title="changed trailer"
                    src="https://www.youtube.com/embed/ATp2uhKw_qQ">
                </iframe>
            </div>
            <p id="main-description" class="lead text-center m-4 literal-string-format">
                {props.locale.changed.description}
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
                <h3 className="display-3 text-center ">{props.locale.steam}</h3>
                <div id="steam-section-widget" className="text-center">
                    <iframe className="img-fluid mx-auto d-block" src="https://store.steampowered.com/widget/814540/" frameborder="0" title="steam store page"></iframe>
                </div>
            </div>

        </main>
    );
}

export default Changed;