import React from 'react';
import '../Styles/NavBar.styles.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <nav className='navbar'>
                <div className='navbar-brand'>
                    <Link to='/'>
                        Blogs Feed
                    </Link>
                </div>
                <div className='navbar-links'>
                    <ul>
                        <li>
                            <Link to='/blogs'>
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link to='/create'>
                                Create
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;