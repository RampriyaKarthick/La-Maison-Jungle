import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
    const title = "La Maison Jungle"
    return (
        <div className='banner'>
        <img src={logo} alt='La maison Jungle' className='lmj-logo'/>
        <h1 className="lmj-maison">{title}</h1>
    </div>
    )
   
}

export default Banner