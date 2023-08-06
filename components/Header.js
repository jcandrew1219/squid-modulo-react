import React from 'react';
import Navigation from './Navigation';

function Header({currentPage, setCurrentPage}) {
    return (
        <header className="container-fluid py-4">
            <div className="row justify-content-between">
                <div className="header-title">
                    <h1>Jacob's React Portfolio</h1>
                </div>
                <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            </div>
        </header>
    );
}

export default Header;