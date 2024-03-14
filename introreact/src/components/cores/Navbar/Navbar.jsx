import './navbar.styles.css'
import { Link } from 'react-router-dom';

export default function Navbar(){
  return(
    <>
    <div>
      <div class = 'navbar'>
        <Link to='/'>
        <div>
          Logo
        </div>
        </Link>
        <Link to='/login'>
        <div>
          Profile
        </div>
        </Link>
        <div>
          Project
        </div>
      </div>
      </div>
    </>
  )
}