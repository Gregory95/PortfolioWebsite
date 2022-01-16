import React from 'react';
import AboutStyles from '../assets/styles/about.css';


class About extends React.Component {
    render() {
        return (
            <div className="main" id="about">
                <div className="section-title">
                    <h1>About me</h1>
                </div>
                <div className="section-description">
                    <p>In 2013 i graduated from high school and went to University of Nicosia. In university i had the opportunity to see how a software works. How you can give commands by typing some lines of code. I got this feeling that every creator gets when it comes to imagination and make the ideas happen in real life.
                        <br />As the Mrs. Gabe, the creator of Valve, said The programmers of tomorrow are the wizards of the future.</p>
                </div>
                <div className="main-timeline">
                    <div className="timeline">
                        <div className="icon"></div>
                        <div className="date-content">
                            <div className="date-outer">
                                <span className="date">
                                    <span className="month">4 Months</span>
                                    <span className="year">2015</span>
                                </span>
                            </div>
                        </div>
                        <div className="timeline-content">
                            <h5 className="title">University of Nicosia</h5>
                            <h6 className="title">Lab Assistant</h6>
                            <p className="description">
                                An opportunity is given to me to work in University as computer lab assistant.
                                I have already working in the coffee restaurant but this job could bring me closer to Tech world that i was dreaming to be.
                                So i accept this job and worked for almost 4 months as Computer Lab assistant. The time period i worked in this position seem little but it
                                gave some knowledge about computer hardware that i found really interesting and helpful.
                            </p>
                        </div>
                    </div>

                    <div className="timeline">
                        <div className="icon"></div>
                        <div className="date-content">
                            <div className="date-outer">
                                <span className="date">
                                    <span className="month">2 Years</span>
                                    <span className="year">2019</span>
                                </span>
                            </div>
                        </div>
                        <div className="timeline-content">
                            <h5 className="title">Alpha Bank Cyprus</h5>
                            <h6 className="title">Business Analyst</h6>
                            <p className="description">
                                My first professional job opportunity came in 4 of March 2019. I got an opportunity to work in Alpha Bank Cyprus as business analyst. I joined in an amazing team that works on projects that will create a new digital experience for Bank`s customers.
                                I was working on an extremely advanced project. PSD2 (Payment Services Directive 2) is the second Payment Services Directive, designed by the countries of the European Union. It could revolutionize the payments industry, affecting everything from the way we pay online, to what information we see when making a payment.
                                Based on my passion on software development i was responsible to guide the programmers to create the best API products that Alpha Bank Cyprus will provide to the Third Party Provides (TPP).
                            </p>
                        </div>
                    </div>

                    <div className="timeline">
                        <div className="icon"></div>
                        <div className="date-content">
                            <div className="date-outer">
                                <span className="date">
                                    <span className="month">Current</span>
                                    <span className="year">2020</span>
                                </span>
                            </div>
                        </div>
                        <div className="timeline-content">
                            <h5 className="title">I-SPIRAL</h5>
                            <h6 className="title">Software Developer & QA Tester</h6>
                            <p className="description">
                                My dream to work as software developer is finally became true. I joined in an amazing team that helps me to improve my skills as software developer and myself as a person.
                                iSPIRAL helps companies securely, effectively and effortlessly operate and comply with worldwide regulations.
                                Our main goal is to help our clients to automate their compliance responsibilities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;