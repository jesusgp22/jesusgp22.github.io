import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/portfolio'>Portfolio</Link></li>
                <li><Link to='/blog'>blog</Link></li>
            </ul>
        </nav>
    </header>
)

export default Header