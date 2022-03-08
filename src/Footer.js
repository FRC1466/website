import './styles.css';
import FB from './media/socials/logo_facebook.svg'
import IG from './media/socials/logo-instagram.svg'
import TW from './media/socials/logo-twitter.svg'
import YT from './media/socials/logo-youtube.svg'
import GT from './media/socials/logo-github.svg'
import Webb from './media/socials/logo-webb.svg'
import FIRST_LOGO from './media/socials/logo-first.svg'

function Footer(){
    return(
        <footer>
            <div className="logo-wrap">
                <div id='facebook-logo-footer' className='logo-footer'>
                    <a href='https://www.facebook.com/FIRST1466/'>
                        <img src={FB}/>
                    </a>
                </div>
                <div id='instagram-logo-footer' className='logo-footer'>
                    <a href='https://www.instagram.com/webb-robotics/'>
                        <img src={IG}/>
                    </a>
                </div>
                <div id='twitter-logo-footer' className='logo-footer'>
                    <a href='https://twitter.com/webb1466'>
                        <img src = {TW}></img>
                    </a>
                </div>
                <div id='youtube-logo-footer' className='logo-footer'>
                    <a href='https://www.youtube.com/channel//UCFfOXEsL3QqyypXxH4HnG4g'>
                        <img src={YT}></img>
                    </a>
                </div>
                <div id='github-logo-footer' className='logo-footer'>
                    <a href='https://github.com/FRC1466'>
                        <img src= { GT }></img>
                    </a>
                </div>
                <div id='webb-logo-footer' className='logo-footer'>
                    <a href='https://www.webbschool.org'>
                        <img src={Webb}></img>
                    </a>
                </div>
                <div id='frc-logo-footer' className='logo-footer'>
                    <a href='https://www.firstinspires.org/robotics/frc'>
                        <img src= {FIRST_LOGO}></img>
                    </a>
                </div>
            </div>
        </footer>
    );
}
export default Footer;