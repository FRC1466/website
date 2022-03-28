import '../../styles.css';
import { Link } from 'react-router-dom';
import Elec from '../../media/photo-gallery/Training/Electrical.jpg'
import Safe from '../../media/photo-gallery/Training/Safety.jpg'

function FRC_Training(){
    return(
        <div className="FRC">
                <strong className='article-title'>Training Modules</strong>
                <p>
                    Around the start of quarantine in 2020 the FRC team started making different training modules to help rookie team members learn the ropes of all the different functions of FRC.
                    These were very useful tools for both the 2020 and 2021 offseasons for the team, so they are now publicly available for use!
                </p>
                <ul className='training-table'>
                <li>
                <div className='training-item'>
                    <strong className='training-category'>
                        Electrical
                    </strong>
                    <br/>
                    <img className='train-img' src={Elec}/>
                    <article>
                    <p>
                        The Electrical subteam has always been an integral part of the FRC team, and as FRC switches to a somewhat new electronics board for the next season 
                        it is even more important than ever for us to have people trained on how to properly use the tools that will help us learn
                        the new system.
                    </p>
                    </article>
                </div>
                </li>
                <li>
                <div className='training-item'>
                    <strong className='training-category'>
                        General Safety
                    </strong>
                    <br/>
                    <img className='train-img' src={Safe}/>
                    <p>
                        Safety is always our top priority when we are working, no matter if it is mechanical, electrical, code, or even CAD.
                        Thus the team makes sure to utilize the safety modules every offseason to properly ensure the security of new team members.
                    </p>
                </div>
                </li>
                </ul>
                <ul className='training-table'>
                    <li>
                        <Link to='/FRC/Training/Electrical' className='training-link'>View our Electrical Training Resources</Link>
                    </li>
                    <li>
                        <Link to='/FRC/Training/Safety' className='training-link'>View our General Safety Training Resources</Link>
                    </li>
                </ul>
                <br/>
            <p>
                More Training Resources Coming soon!
            </p>
            <div id='home-wrapper'>

            </div>
        </div>
    );
}
export default FRC_Training;