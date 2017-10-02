import React from 'react'

import './../styles/home.css';
import placeholder from './../images/header.jpg'
import profile from './../images/profile.jpg'

export const Home = () => [
    <section className="main-section container">
        <div className="row">
            <div className="col-4">
                <div className="card presentation">
                    <img className="card-img-top card-header-img" src={placeholder} alt="Card image cap" />
                    <img className="profile-picture rounded-circle" src={profile} alt="Profile picture" />
                    <div className="card-body text-center">
                        <h4 className="card-title">Jesús Gómez</h4>
                        <p className="card-text">Software Engineer</p>
                        <p className="card-text">Mérida, Venezuela</p>
                    </div>
                </div>
            </div>
            <div className="col-8">
                <div className="card console">
                    <textarea></textarea>
                </div>
            </div>
        </div>

        

    </section>,
    <section className="about-me">
        <p>About me</p>
    </section>,
    <section className="contact">
        <p>Contact me</p>
    </section>
]

export default Home