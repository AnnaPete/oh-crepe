import './Header.css'
import {Link} from 'react-router-dom'

function Header(props) {
    return (
        <div className="header">
            <Link to={'/'} style={{ textDecoration: 'none' }}>
                <h1 className='oh-crepe'>Oh Crepe</h1>
            </Link>
        </div>
    )
  }
  
  export default Header;