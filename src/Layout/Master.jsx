import { Link, Outlet } from 'react-router';
import './Master.css';
import { NavLinks } from './NavLinks';
import { RGButton } from '../Components/RGButton';
import { NavSearch } from './NavSearch';

function Master()
{
    return (
        <main>
            <header>
                <div class='nav-right'>
                    <RGButton color={'#D79129'} text={'Create Tab'}></RGButton>
                </div>
                <div class='nav-title-container'>
                    <h1 className='nav-title'>Reformed Guitarist</h1>
                </div>
                <NavLinks />
                <NavSearch />
            </header>
            <div className='content'>
                <Outlet />
            </div>
        </main>
    );
}

export default Master;