import './Header.css'

function Header(props) {
    return (
        <div className="header">
            <h1 className='oh-crepe' onClick={props.returnHome} >Oh Crepe</h1>
            <h1>Search bar goes here</h1>
        </div>
    )
  }
  
  export default Header;