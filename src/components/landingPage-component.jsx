import React, { Component } from 'react';
import '../assets/styles/landingPage.css';
import myPhoto from '../assets/images/me.jpg';
class LandingPage extends Component {

    handleScrollTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    }

    render() {

        const user = {
            linkedHandle: 'https://www.linkedin.com/in/grigorios-kokozides-650113113',
            instagramHandle: 'https://www.instagram.com/_kokozides_/',
            githubHandle: 'https://github.com/Gregory95',
            emailHandle: 'mailto:kokozides.g@outlook.com'
        };

        return (
            <div className="hero" id="home">
                <div className="splitView">
                    <div className="left">
                        <img src={myPhoto} alt="me" />
                    </div>
                    <div className="right">
                        <div className="home-intro">
                            <p>Hello i am..</p>
                            <div className="avatar-mobile">
                                <img onClick={this.handleScrollTop} src={myPhoto} alt="me" />
                            </div>
                        </div>

                        <div className="home-header">
                            <h1>Grigoris Kokozidis</h1>
                        </div>
                        <div className="home-right">
                            <div className="home-text">
                                {/* <p id="typingText"></p> */}
                                <p><br /> I`m a
                                    strongly motivated
                                    coder with excellent communication skills. Looking to create value for customers with the magic
                                    of programming.<br /> If you want to get
                                    in touch with me find my social media links below or just drop me a <span><a href="#contact"
                                        className="message">message</a><span>&#128512;</span></span>
                                </p>
                            </div>
                            <div className="social-media">
                                <a href={user.linkedHandle} target="_blank" rel="noopener"><span className="fa fa-linkedin"></span></a>
                                <a href={user.instagramHandle} target="_blank" rel="noopener"><span className="fa fa-instagram"></span></a>
                                <a href={user.githubHandle} target="_blank" rel="noopener"><span className="fa fa-github"></span></a>
                                <a href={user.emailHandle} target="_blank" rel="noopener"><span className="fa fa-envelope"></span></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;