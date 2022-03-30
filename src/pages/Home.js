import '../styles.css';
import Team from '../media/team/IMG_3594.jpg'






function Home()
{
    return(
       <div className='Home'>
           <div id='home-wrapper'>
               <div id='team-image'>
                   <img src={Team} alt='Team in lab'></img>
               </div>
                <div className='home-item' id='home-quote-container'>
                    <div className='home-quote'>
                        <h>
                            "Go Farther. Go Further." - Webb School of Knoxville 
                        </h>
                    </div>
                </div>
                <div className='home-item'>
                    <div className='home-article'>
                        <div id='history-title'>
                            <h>Our History</h>
                        </div>
                        <p>
                        The Webb Robotics program, founded in 2003 by former Upper School math teacher “Brotha” Dave Pierce. In the 2003-2004 school year, the upper school’s FIRST Robotics Competition (FRC) team #1466 traveled to Duluth, GA for the Peachtree Regional as rookies. The 2004 team’s robot was a literal tank, with hand made tank treads and topped with a toy Tasmanian Devil. That rookie Webb team had a great run to the playoffs in Duluth, but also helped establish what is now the oldest continuous FIRST Robotics Competition team in east Tennessee and the second oldest program in the state. FRC team #1466 has seen a lot of change throughout its history, but the commitment to technical innovation, student leadership, and community involvement have remained at the heart of the program.
                        </p>
                        <p>
                        Though the upper school FRC program thrived for its first ten years in the upper school, it was clear that the FIRST Core Values of discovery, innovation, impact, inclusion, teamwork, and fun had a place in the lower and middle schools as well. In 2013, the robotics program expanded to include a FIRST LEGO League (FLL) with middle school science teacher Miller Callaway at the helm. In fall of 2014, upper school science teacher Jenifer Lawrie stepped in for a retiring Dave Pierce. A FIRST Tech Challenge (FTC) team was added for middle school grades the following year. Today, the school boasts two FLL teams serving grades 3rd-8th, one FTC team serving grades 6th-11th, and upper school FRC team 1466 continues to include students in grades 7th-12th. Though each team competes in separate divisions under the FIRST competitive robotics umbrella, students aim to see robotics as a single team, with a unifying mission statement and community goals. As of August 2020, the robotics programs from all three divisions share a common workspace in Webb’s new Innovation Center. 
                        </p>
                    </div>
                </div>
                <div className='home-item' id='program-overview'>
                    <div id='program-content-container'>
                        <div id='program-content-title'>
                            <h>The Program</h>
                        </div>
                        <p>At Webb, students learn leadership, teamwork, and responsibility. The robotics program takes that further.</p>
                        <ul>
                            <li>Through mentorship, students learn the basics of mechanical engineering, computer aided design (CAD), 
                                electrical enginnering, and coding. As they settle into a role, they further their learning independently.
                            </li>
                            <li>Project prioritization is a key value when working on robots. Members learn how to effectively manage 
                                the limited competition time to maximize the amount of points and robot progress they can achieve at the end of the season. 
                            </li>
                            <li>As students become more integrated into the team, they begin to take leadership roles. Members learn how to
                                manage groups of people and designate roles. They eventually transform into inspiring leaders that the rest of the team looks up to.
                            </li>
                            <li>
                                Teamwork is an essential part of robotics, and at Webb, this is taken further. New members are enthusiastically
                                welcomed into the team, where they learn their dynamic with the rest of the team. Members are trusted with different tasks, 
                                and learn to reciprocate that trust as their taskload changes.
                            </li>
                            <li>
                                Members learn business skills as they learn to contact sponsors and give a convincing
                                pitch about the team.
                            </li>
                            <li>
                                Networking is a vital component members learn when attending competitions and in general. Team collaborations
                                and cooperation allow members to meet new people and make relationships between other teams.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='home-item' id='sponsor-teams-splash'>
                    <div className='sponsor-button'>
                        <a href='./Sponsors'>
                        <span>Sponsor Us</span>
                        </a>
                    </div>
                    <div id='team-more'>
                        <h>The Teams:</h>
                    </div>
                    <div className='team-links'>
                        <div className='FRC-button'>
                            <a href='./FRC'><span>FRC</span></a>
                        </div>
                        <div className='FTC-button'>
                            <a href='./FTC'><span>FTC</span></a>
                        </div>
                        <div className='FLL-button'>
                            <a href='./FLL'><span>FLL</span></a>
                        </div>
                    </div>
                </div>
           </div>
       </div>
    );
}

export default Home; 