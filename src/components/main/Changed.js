import changedLogo from '../../images/changed.webp';
import colin from '../../images/Colin.webp';
import puro from '../../images/Puro.webp';

function Changed(props) {

    return (
        <main className="container pb-3 displayed-content">
            <div id="changed-logo">
                <img className="img-fluid mx-auto d-block" src={changedLogo} alt="changed logo" />
            </div>
            <div id="changed-video" className="mt-3" >
                <iframe className="img-fluid mx-auto d-block" title="changed trailer"
                    src="https://www.youtube.com/embed/ATp2uhKw_qQ">
                </iframe>
            </div>
            <p id="changed-description" class="lead text-center m-4 formatted-string">
                {props.locale.changed.description}
            </p>
            <div className="d-flex flex-row flex-wrap justify-content-between position-absolute" id="changed-characters">
                <div className="changed-character mt-5 ms-5">
                    <img className="img-fluid" src={colin} alt="colin" />
                </div>
                <div className="changed-character me-5">
                    <img className="img-fluid" src={puro} alt="puro" />
                </div>
            </div>
            <div id="steam">
                <h3 className="display-3 text-center ">{props.locale.steam}</h3>
                <div id="steam-widget" className="text-center">
                    <iframe className="img-fluid mx-auto d-block" src="https://store.steampowered.com/widget/814540/" frameborder="0" title="steam store page"></iframe>
                </div>
            </div>

        </main>
    );
}

export default Changed;