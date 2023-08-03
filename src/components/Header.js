import React from 'react';
import Navigation from './Navigation';

function Header({currentPage, setCurrentPage}) {
    return (
        <header>
            <div>
                <h1>Jacob's React Portfolio</h1>
            </div>
            <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </header>
    );
}

export default Header;