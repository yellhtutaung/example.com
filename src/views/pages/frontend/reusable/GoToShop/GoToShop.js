import './GoToShop.scss';
import anime from 'animejs';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const GoToShop = () => {

    const closeCard = () => {
        anime({
            targets: "#go_to_shop",
            translateX: [0, "150%"],
        });
        anime({
            targets: "#open_go_to_shop",
            translateX: ["100%", 0],
        });
    }

    const openCard = () => {
        anime({
            targets: "#go_to_shop",
            translateX: ["105%", 0],
        });
        anime({
            targets: "#open_go_to_shop",
            translateX: [0, "105%"],
        });
    };

    return (
        <div>
            <div id="open_go_to_shop" onClick={openCard}>
                <button>
                    <ArrowBackIosNewIcon  />
                </button>
            </div>
            <div id="go_to_shop">
                <div className="shop_redirect_card">
                    <div className="header">Are you after fresh fruits and vegetables delivery?</div>
                    <div className="body">Please click below to order</div>
                    <span onClick={closeCard} className="close_card">&times;</span>
                <a href="https://staging.freshmoe.shop" className="redirect_btn w-100 text-center fw-bold">Go to Shopping</a>
                </div>
            </div>
        </div>
    )
}

export default GoToShop;