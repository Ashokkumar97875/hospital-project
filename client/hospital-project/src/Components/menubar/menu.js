import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';

export function Menupage(){
    

    return(
        <>
            <header className='header'>
                    <a href='#' className='logo'><FontAwesomeIcon icon={faHeartPulse} className='i' />medcare</a>

                    <nav className='navbar'>
                        <Link to='/'>Home</Link>
                        <Link to='/loginpage'>Login</Link>
                    </nav>
                    </header>
        </>
    );
}