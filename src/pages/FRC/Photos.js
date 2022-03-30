import '../../styles.css';

/* copypaste <img src='https://drive.google.com/uc?export=view&id=1bpMr1lLAm5DHHZTnBTT5xyQlIgEN2Ibd/'></img> */

function Photos_FRC(){
    return(
        <div className="photo-wrapper">
            <strong className='article-title'>FRC 1466 Photo Gallery</strong>

            {/* JS Time (eventually)*/}
            <p>
                Work in progress, will have more dynamic photos here soon
            </p>
            <div className='photo-spread'>
                <div className='photo-entry'>
                    <img src='https://drive.google.com/uc?export=view&id=1bpMr1lLAm5DHHZTnBTT5xyQlIgEN2Ibd' alt='google drive'></img>
                </div>
                <div className='photo-entry'>
                    <img src='https://drive.google.com/uc?export=view&id=1bnJCQSyuXpIcU6xNrEB7WomlOhBMsR3W' alt='google drive'></img>
                </div>
                <div className='photo-entry'>
                    <img src='https://drive.google.com/uc?export=view&id=1GQO4OzvvTJvesTUNvJebh8dwQROJTBqi' alt='google drive'></img>
                </div>
                <div className='photo-entry'>
                    <img src='https://drive.google.com/uc?export=view&id=1GzNf3pAIDgwiRWm3aZZclA6311XsMjiE' alt='google drive'></img>
                </div>
                <div className='photo-entry'>
                    <img src='https://drive.google.com/uc?export=view&id=1VzOzape-uFc8fqFYNox1RuZcrdUxFCWI' alt='google drive'></img>
                </div>
                <div className='photo-entry'>
                    <img src='https://drive.google.com/uc?export=view&id=1LvtB-wWbRw43_nAJzhUEE-vBia9B6FrT' alt='google drive'></img>
                </div>
                <div className='photo-entry'></div>
            </div>
        </div>
    );
}
export default Photos_FRC;