import changedLogo from '../../images/changed.webp';

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
            <p id="changed-description" class="lead text-center mt-4 mb-4">
                {props.locale.changed.description}
            </p>
            <div id="steam">
                <h3 className="display-3 text-center">{props.locale.steam}</h3>
                <div id="changed-steam" className="text-center">
                    <iframe className="img-fluid mx-auto d-block" src="https://store.steampowered.com/widget/814540/" frameborder="0" title="steam store page"></iframe>
                </div>
            </div>
        </main>
    );
}

export default Changed;