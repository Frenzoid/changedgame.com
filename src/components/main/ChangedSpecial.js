import changedSpecialLogo from '../../images/changedSpecial.webp';
import steamLogo from '../../images/steam.webp';

function ChangedSpecial(props) {

    return (
        <main className="container pb-3 displayed-content">
            <div id="changed-logo">
                <img className="img-fluid mx-auto d-block" src={changedSpecialLogo} alt="changed logo" />
            </div>
            <p id="changed-description" class="lead text-center mt-4">
                {props.locale.special.description}
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

export default ChangedSpecial;