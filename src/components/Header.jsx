import '../App.css';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <div className="main-header">
            <ul>
                <Link to='/' className='main-header-li'>Home</Link>
                <Link to='/counter' className='main-header-li'>Counter</Link>
                <Link to='/about' className='main-header-li'>About</Link>
                <Link to='/calculator' className='main-header-li'>Calculator</Link>
            </ul>
        </div>
    );
}

export default Header;