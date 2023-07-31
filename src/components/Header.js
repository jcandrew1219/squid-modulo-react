import React from 'react';
import Navigation from './Navigation';

function Header(currentPage, handlePageChange) {
    return (
        <header>
            <div>
                <h1>Jacob's React Portfolio</h1>
            </div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
        </header>
    );
}

export default Header;