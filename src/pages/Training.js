import './styles.css';
import { Link } from 'react-router-dom';

function Training(){
    return(
        <div className="Training">
            <strong>Welcome to FRC 1466 Training Modules!</strong>
            <br></br>
            <Link to='/Training/Mechanical'>Mechanical Modules</Link>
        </div>
    );
}
export default Training;