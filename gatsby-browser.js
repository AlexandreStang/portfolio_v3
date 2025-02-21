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