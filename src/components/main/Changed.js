import changedLogo from '../../images/changed.webp';
import steamLogo from '../../images/steam.webp';

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
            <p id="changed-description" class="lead text-center mt-4">
                {props.locale.changed.description}
            </p>
            <div id="changed-steam" className="text-center mt-5">
                <h3 className="display-3">{props.locale.steam}</h3>
                <a href="https://store.steampowered.com/app/814540/Changed/">
                    <img className="img-fluid mx-auto d-block" src={steamLogo} alt="steam logo" />
                </a>
            </div>
        </main>
    );
}

export default Changed;