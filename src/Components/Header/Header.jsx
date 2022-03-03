import './Header.css';
import { Link } from 'react-router-dom'



function Header(){    

    return(
        <>

            <h1>Restauran</h1>

            <Link to='/basket'>Basket</Link>
            
        </>
    )
}

export default Header;