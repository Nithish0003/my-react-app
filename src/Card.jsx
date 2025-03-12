import profile from './assets/1369365.jpeg'
import './index.css'
function Card(){
    return(
        <div className="card">
            <img className='img' src={profile} alt="profile image" />
            <h2>Nithish</h2>
            <p>I Valorent and watch anime</p>
        </div>
    )
}

export default Card;