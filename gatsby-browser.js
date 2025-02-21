import AOS from 'aos';
import 'aos/dist/aos.css';

export const onInitialClientRender = () => {

    // document.body.setAttribute('id', 'body');
    // document.body.setAttribute('data-aos', 'body');

    AOS.init({
        once: true,
        duration: 1200,
    });

};

export const onRouteUpdate = ({ location }) => {
    if (typeof window !== 'undefined' && location && !location.hash) {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);
    }
};

export const shouldUpdateScroll = ({ location }) => {
    return !(location && location.hash);
};