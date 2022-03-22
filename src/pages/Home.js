import logo from '../logo.svg';
import '../styles.css';
import FLL_t from '../media/stock/FLL_tournament.jpg'
import FIRST_l from '../media/stock/FIRST-light.png'
import FTC_t from '../media/stock/FTC-tournament.jpg'
import FRC_t from '../media/stock/FRC-tournament.jpg'
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
                                <strong>The Program</strong>
                            </t1>
                        </div>
                        <div className="pContainer">
                            <p>The Webb Robotics program, founded in 2003 by former Upper School math teacher “Brotha” Dave Pierce. In the 2003-2004 school year, the upper school’s FIRST Robotics Competition (FRC) team #1466 traveled to Duluth, GA for the Peachtree Regional as rookies. The 2004 team’s robot was a literal tank, with hand made tank treads and topped with a toy Tasmanian Devil. That rookie Webb team had a great run to the playoffs in Duluth, but also helped establish what is now the oldest continuous FIRST Robotics Competition team in east Tennessee and the second oldest program in the state. FRC team #1466 has seen a lot of change throughout its history, but the commitment to technical innovation, student leadership, and community involvement have remained at the heart of the program.

Though the upper school FRC program thrived for its first ten years in the upper school, it was clear that the FIRST Core Values of discovery, innovation, impact, inclusion, teamwork, and fun had a place in the lower and middle schools as well. In 2013, the robotics program expanded to include a FIRST LEGO League (FLL) with middle school science teacher Miller Callaway at the helm. In fall of 2014, upper school science teacher Jenifer Lawrie stepped in for a retiring Dave Pierce. A FIRST Tech Challenge (FTC) team was added for middle school grades the following year. Today, the school boasts two FLL teams serving grades 3rd-8th, one FTC team serving grades 6th-11th, and upper school FRC team 1466 continues to include students in grades 7th-12th. Though each team competes in separate divisions under the FIRST competitive robotics umbrella, students aim to see robotics as a single team, with a unifying mission statement and community goals. As of August 2020, the robotics programs from all three divisions share a common workspace in Webb’s new Innovation Center.</p>
                        </div>
                        <div className="aContainer">
                            <Link to='/FIRST'>Learn more here.</Link>
                        </div>
                    </article>
                    <article className="home-article" id="general">
                        <div className="article-title">
                            <t1>
                                <strong>FIRST ROBOTICS</strong>
                            </t1>
                        </div>
                        <div className="pContainer">
                            <p>is a series of engineering challenges posed to participants grades PreK - 12. These challenges are designed to encourage students to participate in STEM fields in a fun and engaging way. The Webb Robotics team has been competing since 2004 and is now one of the oldest active teams in the region.</p>
                        </div>
                        <div className="aContainer">
                            <Link to='/FIRST'>Learn more here.</Link>
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
                            <p>is an introduction to the FIRST community open to students grades PreK - 8, with three subcompetitions directed at more specific age groups. These competitions are designed to be fun and interactive while getting young students exited about STEM fields.</p>
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
                            <p>becomes more advanced than FLL and is open to middle and high school students. This program teaches students the basics of coding, robot design and assembly, team branding, and community outreach.</p>
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
                        <p>is the top level of competition for FIRST. High school students are placed under a strict time limit to create all the necesary components for their robot from scratch and compete against other teams from around the world in a different game every year, culminating in the FIRST Championship in the spring.</p>
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