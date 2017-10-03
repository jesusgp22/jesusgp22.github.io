import React from 'react'
import { Link } from 'react-router-dom'

import './../styles/navbar.css'

export const Header = () => (
    <header className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav navbar-center">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/"><i className="fa fa-lightbulb-o"></i> Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About me</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/blog">Blog</Link>
                    </li>
                </ul>
                <ul className="navbar-nav lr-auto">
                    <li className="nav-item dropdown">
                        <button className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-language"></i>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <button className="dropdown-item">English</button>
                            <button className="dropdown-item">Spanish</button>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Header