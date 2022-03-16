import '../../styles.css';
import { Link } from 'react-router-dom';

function FRC_Training(){
    return(
        <div className="FRC">
            <strong className='article-title'>Training Modules</strong>
            <p>Below are links to different categories of training modules we have</p>
            <p>
                <Link to='/FRC/Training/Electrical'>Electrical</Link>
            </p>
            <p>
                <Link to='/FRC/Training/Safety'>General Safety</Link>
            </p>
            <p>
                More Training Resources Coming soon!
            </p>
        </div>
    );
}
export default FRC_Training;