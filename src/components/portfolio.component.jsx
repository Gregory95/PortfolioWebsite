import React from 'react';
import PortfolioImage from '../assets/images/Portfolio.jpg';
import CovidImage from '../assets/images/covid.jpg';
import TaxiImage from '../assets/images/cab.jpg';
import ProjectStyles from '../assets/styles/portfolio.css';


class Portfolio extends React.Component {
    projectLinks = {
        portfolioProject: "",
        covidProject: "https://covidinfotracker.netlify.app",
        taxiProject: "https://www.taxinakipre.com"
    };

    handleScrollTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    }

    render() {
        return (
            <div className="main-portfolio" id="portfolio">
                <div className="section-title">
                    <h1>Portfolio</h1>
                </div>

                <div className="projects-container">
                    <div className="row">
                        <div className="projects">
                            <img alt="Portfolio screenshot" src={PortfolioImage} width="400" height="300" />
                            <div className="fadedbox">
                                <div className="title text">
                                    <a onClick={this.handleScrollTop}>
                                        <strong>Portfolio</strong>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="projects">
                            <img alt="covid-19" src={CovidImage} width="400" height="300" />
                            <div className="fadedbox">
                                <div className="title text">
                                    <a href={this.projectLinks.covidProject} target="_blank" rel="noopener">
                                        <strong>Covid-19 Tracker</strong>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="projects">
                            <img alt="Taxi Project for a client in Cyprus - Такси на Кипре" src={TaxiImage}
                                width="400" height="300" />
                            <div className="fadedbox">
                                <div className="title text">
                                    <a href={this.projectLinks.taxiProject} target="_blank" rel="noopener">
                                        <strong>Taxi Services </strong>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;