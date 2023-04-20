import pageNotFound from "../assets/error.json"
import paymentSuccess from "../assets/success.json"
import orderConfirmed from "../assets/orderConfirmed.json"
import loading from "../assets/addToCart.json"

const gif = {
    pnpOptions: {
        loop: true,
        autoplay: true,
        animationData: pageNotFound,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    },
    paymentOptions: {
        loop: false,
        autoplay: true,
        animationData: paymentSuccess,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    },
    orderConfirmedOptions: {
        loop: false,
        autoplay: true,
        animationData: orderConfirmed,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    },
    loadingOptions: {
        loop: true,
        autoplay: true,
        animationData: loading,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
}
export default gif;
