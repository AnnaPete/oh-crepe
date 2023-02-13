import './Header.css'
import image from '../Images/clapper.png'
import {Link} from 'react-router-dom'

function Header(props) {
    return (
        <div className="header">
            <Link to={'/'} style={{ textDecoration: 'none' }} className='please'>
                <img className='logo' src={image} alt='clapper' />
                <h1 className='oh-crepe'>Oh, Crepe!</h1>
            </Link>
        </div>
    )
  }
  
  export default Header;