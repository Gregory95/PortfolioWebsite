import React from 'react';

import '../assets/styles/skills.css';

import HtmlCss from '../assets/images/htmlcss.jpg';
import Javascript from '../assets/images/javascript.jpg';
import Typescript from '../assets/images/typescript.jpg';
import Angular from '../assets/images/Angular.jpg';
import ReactImg from '../assets/images/react.jpg';
import SQL from '../assets/images/sql.jpg';
import Csharp from '../assets/images/dotnet.jpg';
import Docker from '../assets/images/docker.jpg';
import Json from '../assets/images/json.jpg';
import CodingImage from '../assets/images/coding.jpg';


class Skills extends React.Component {

    render() {
        return (
            <div className="main-skills" id="skills">
                <div className='container-fluid'>
                    <h1 className="entity-title section-title">Tech Stack</h1>
                    <p>Here is my favorite Tech Stack, languages and frameworks that I use every day in most of my projects.
                        <span>&#128640;</span>
                    </p>
                    <div className='_split'>
                        <div className="_left">
                            <div className="skills-holder">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="skill-holder">
                                            <img alt="javascript" src={Javascript} id="js_icon" align="middle" />
                                            <span id="js">Javascript</span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="skill-holder">
                                            <img alt="typescript" src={Typescript} id="ts_icon" align="middle" />
                                            <span id="ts">Typescript</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="skill-holder">
                                            <img alt="htmlcss" src={HtmlCss} id="css_icon" align="middle" />
                                            <span id="css">HTML5 + CSS3</span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="skill-holder">
                                            <img alt="Angular" src={Angular} id="angular_icon" align="middle" />
                                            <span id="Angular">Angular</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="skill-holder">
                                            <img alt="react" src={ReactImg} id="react_icon" align="middle" />
                                            <span id="rt">React</span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="skill-holder">
                                            <img alt="sql" src={SQL} id="sql_icon" align="middle" />
                                            <span id="sql">T-SQL</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="skill-holder">
                                            <img alt="Dotnet C#" src={Csharp} id="dotnet_icon" align="middle" />
                                            <span id="csharp">C# .NET</span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="skill-holder">
                                            <img alt="Docker" src={Docker} id="docker_icon" align="middle" />
                                            <span id="docker">Docker</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="skill-holder">
                                            <img alt="json" src={Json} id="json_icon" align="middle" />
                                            <span id="Json">JSON</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="_right">
                            <img src={CodingImage} alt="Programming" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;