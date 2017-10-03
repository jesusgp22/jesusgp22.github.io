import React from 'react'

import './../styles/home.css';
import placeholder from './../images/header.jpg'
import profile from './../images/profile.jpg'

const ascii = [
"    __        __   _                          _ ",
"    \\ \\      / /__| | ___ ___  _ __ ___   ___| |",
"     \\ \\ /\\ / / _ \\ |/ __/ _ \\| '_ ` _ \\ / _ \\ |",
"      \\ V  V /  __/ | (_| (_) | | | | | |  __/_|",
"       \\_/\\_/ \\___|_|\\___\\___/|_| |_| |_|\\___(_)",
]

export const Home = () => [
    <section className="main-section container">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-4">
                <div className="card presentation">
                    <img className="card-img-top card-header-img" src={placeholder} alt="Jesus Gomez header" />
                    <img className="profile-picture rounded-circle" src={profile} alt="Jesus Gomez profile" />
                    <div className="card-body text-center">
                        <h4 className="card-title">Jesús A. Gómez P.</h4>
                        <h5 className="card-text"><i className="fa fa-terminal"></i> Software Engineer</h5>
                        <p className="card-text"><i className="fa fa-map-marker"></i> Mérida, VE</p>
                        <p>
                            <span class="badge badge-light">Back-end</span>
                            {" "}
                            <span class="badge badge-light">Front-end</span>
                            {" "}
                            <span class="badge badge-light">Engineering</span>
                            {" "}
                            <span class="badge badge-light">Project Management</span>
                            {" "}
                            <span class="badge badge-light">Deployments</span>
                            {" "}
                            <span class="badge badge-light">CI/CD</span>
                            {" "}
                            <span class="badge badge-light">Testing</span>
                            {" "}
                            <span class="badge badge-light">Agile</span>
                            {" "}
                            <span class="badge badge-light">Algorithms</span>
                        </p>
                        <div className="presentation-footer">
                            <p className="card-text">
                                <span class="fa-stack fa-lg" style={{color: "#1ea1f3"}}>
                                    <i class="fa fa-circle fa-stack-2x"></i>
                                    <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                                </span>
                                <span class="fa-stack fa-lg" style={{color: "#181616"}}>
                                    <i class="fa fa-circle fa-stack-2x"></i>
                                    <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                                </span>
                                <span class="fa-stack fa-lg" style={{color: "#0077b5"}}>
                                    <i class="fa fa-circle fa-stack-2x"></i>
                                    <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                                </span>
                                <span class="fa-stack fa-lg" style={{color: "#c81c1c"}}>
                                    <i class="fa fa-circle fa-stack-2x"></i>
                                    <i class="fa fa-envelope-o fa-stack-1x fa-inverse"></i>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-8">
                <div className="card console">
                    <div className="console-app-bar">
                        <i className="fa fa-terminal"></i>
                        {' '}
                        Command Prompt
                        <div className="pull-right console-app-bar--actions">
                            <i className="fa fa-minus action"></i>
                            {" "}
                            <i className="fa fa-window-maximize action"></i>
                            {" "}
                            <i className="fa fa-times action"></i>
                        </div>
                    </div>
                    <div className="console-content">
                        <pre contentEditable autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
                            <p className="comment">
                            /___________________________________________________/<br/>
                            {
                                ascii.join("\n") + '\n'
                            }
                            /___________________________________________________/<br/>
                            Hello! My name is Jesús, I'm a <span className="emphasis">software engineer</span> and <span className="emphasis">full stack developer</span>
                            <br/>
                            I have four years of experience in design, development, and deployment of computer systems and web applications.
                            <br/>
                            I love learning new technologies, building interactive experiences and designing architectures for applications big or small!<br/>
                            
                            </p>
                            <p>
                            jesus@browser:/$
                            </p>
                        </pre>
                    </div>
                </div>
            </div>
        </div>



    </section>,
    <section className="container about-me">
        <p>About me</p>
    </section>,
    <section className="container contact">
        <p>Contact me</p>
    </section>
]

export default Home