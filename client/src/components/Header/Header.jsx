import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link to={'/'}>
                <h1 className="app-title">World Cup 2026</h1>
            </Link>
        </header>
    )
}

export default Header