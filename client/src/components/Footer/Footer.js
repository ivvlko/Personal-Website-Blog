import 'font-awesome/css/font-awesome.min.css';


const Footer = () => {

    const FontAwesome = require('react-fontawesome');

    return (
        <footer className="CustomFooter" id='Footer'>
            <span>&copy; <em id="copyElement"></em>by Ivan Koev</span>

            <div className='fontawesomeIcons'>
                <a href='https://bg.linkedin.com/in/ivan-koev' target="_blank">
                    <FontAwesome
                        className="linkedinIcon"
                        name='fab fa-linkedin'
                        size='2x'
                    />
                </a>

                <a href='https://www.facebook.com/iv.ko.7921' target="_blank">
                    <FontAwesome
                        className="fbIcon"
                        name='fab fa-facebook'
                        size='2x'
                    />
                </a>

                <a href='https://github.com/ivvlko' target="_blank">
                    <FontAwesome
                        className="fbIcon"
                        name='fab fa-github'
                        size='2x'
                    />
                </a>
            </div>


        </footer>
    )
}

export default Footer;