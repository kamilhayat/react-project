import React from 'react'

export const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className='logo'>
                    
                    LITERACY</div>
                <div className='menu-link'>
                    <ul>
                        <li><a href='#home'>Home </a></li>
                        <li><a href='#home'>About </a></li>
                        <li><a href='#home'>Blog </a></li>
                        <li><a href='#home'>Contact </a></li>
                        <li><a className='contact-me' href='#home'>Contact Me </a></li>
                    </ul>

                </div>
            </nav>
        </>
    )
}
