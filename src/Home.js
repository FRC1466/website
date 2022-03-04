import logo from './logo.svg';
import './styles.css';
import FLL_t from './media/stock/FLL_tournament.jpg'
import FIRST_l from './media/stock/FIRST-light.png'
import FTC_t from './media/stock/FTC-tournament.jpg'
import FRC_t from './media/stock/FRC-tournament.jpg'
import { Link } from 'react-router-dom'


function Home()
{
    return(
        <div className='Home'>
                  <div id="index-wrapper">
        <div className="index-item" id="general-item">
            <div className="index-img-wrap">
                <img src={FIRST_l}></img>
            </div>
            <article className="home-article" id="general">
                <div className="article-title">
                    <t1>
                        <strong>FIRST ROBOTICS</strong>
                    </t1>
                </div>
                <div className="pContainer">
                    <p>&nbsp &nbsp &nbsp is a series of engineering challenges posed to participants grades PreK - 12. These challenges are designed to encourage students to participate in STEM fields in a fun and engaging way. The Webb Robotics team has been competing since 2004 and is now one of the oldest active teams in the region.</p>
                </div>
                <div className="aContainer">
                    <a>Learn more here.</a>
                </div>
            </article>
        </div>
        <div className="index-item" id="FLL-item"> 
            <div className="FLL-img-wrap">
                <img src={FLL_t}></img>
            </div>  
            <article className="home-article" id="FLL">
                <div className="article-title">
                    <t1>
                        <strong>FIRST LEGO LEAGUE</strong>
                    </t1>
                </div>
                <div className="pContainer">
                    <p>&nbsp &nbsp &nbsp is an introduction to the FIRST community open to students grades PreK - 8, with three subcompetitions directed at more specific age groups. These competitions are designed to be fun and interactive while getting young students exited about STEM fields.</p>
                </div>
                <div className="aContainer">
                    <Link to={'./FLL'}>Learn more here.</Link>
                </div>
            </article>
        </div>
        <div className="index-item" id="FTC-item">
            <div className="FTC-img-wrap">
                <img src={FTC_t}></img>
            </div>  
           <article className="home-article" id="FTC">
                <div className="article-title">
                    <t1>
                        <strong>FIRST TECH CHALLENGE</strong>
                    </t1>
                </div>
                <div className="pContainer">
                    <p>&nbsp &nbsp &nbsp becomes more advanced than FLL and is open to middle and high school students. This program teaches students the basics of coding, robot design and assembly, team branding, and community outreach.</p>
                </div>
                <div className="aContainer">
                    <Link to={'./FTC'}>
                        Learn more here
                    </Link>
                </div>
            </article>
        </div>
        <div className="index-item" id="FRC-item">
            <div className="FRC-img-wrap">
                <img src={FRC_t}></img>
            </div>  
            <article className="home-article" id="FRC">
                <div className="article-title">
                    <t1>
                        <strong>FIRST ROBOTICS CHALLENGE</strong>
                    </t1>
                </div>
                <div className="pContainer">
                <p>&nbsp &nbsp &nbsp is the top level of competition for FIRST. High school students are placed under a strict time limit to create all the necesary components for their robot from scratch and compete against other teams from around the world in a different game every year, culminating in the FIRST Championship in the spring.</p>
                </div>
                <div className="aContainer">
                  <Link to={"./FRC"}>
                    Learn More here
                  </Link>
                </div>
            </article>
        </div>
        <nav id="social">
        </nav>
    </div>
    </div>
    );
}

export default Home; 