import './NavLinks.css';
import { Link } from 'react-router';

/**
 * Nav links component.
 * This contains the navigation links for the application.
 * @returns {JSX.Element}
 */
export function NavLinks()
{
    return (
        <nav>
            <ul className='nav-links'>
                <li><Link to='/search/all'>All</Link></li>
                <li><Link to='/search/top'>Top</Link></li>
                <li><Link to='/search/about'>About</Link></li>
            </ul>
        </nav>
    );
}