import { useState } from 'react';
import './navBar.css'

const NavBar = () => {

    const [showBackdrop, setShowBackdrop] = useState(false);

    return (
        <div className="nav-bar-container">
            <div><h2 style={{ margin: 0 }}>loopstudeios</h2></div>
            <ul className='nav_lists'>
                <li className='nav_list'>
                    About
                </li>
                <li className='nav_list'>
                    Careers
                </li>
                <li className='nav_list'>
                    Events
                </li>
                <li className='nav_list'>
                    Products
                </li>
                <li className='nav_list'>
                    Support
                </li>
            </ul>
            <div className='hamburger'><img src={'/images/icon-hamburger.svg'} onClick={() => setShowBackdrop(true)} alt="hamburger icon" /></div>

            { showBackdrop && <div className='mobile-backdrop'>
                <div className='nav-bar-container-back-drop'>
                    <div><h2 style={{ margin: 0 }}>loopstudeios</h2></div>
                    <div className='hamburger'><img src={'/images/icon-close.svg'} onClick={() => setShowBackdrop(false)} alt="close icon" /></div>
                </div>

                <ul className='nav_lists_back_drop'>
                    <li className='nav_list_back_drop'>
                        About
                    </li>
                    <li className='nav_list_back_drop'>
                        Careers
                    </li>
                    <li className='nav_list_back_drop'>
                        Events
                    </li>
                    <li className='nav_list_back_drop'>
                        Products
                    </li>
                    <li className='nav_list_back_drop'>
                        Support
                    </li>
                </ul>
            </div> }
        </div>
    );
}

export default NavBar;