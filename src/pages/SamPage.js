import React from 'react';
import '../css/portfolio.css';
import '../css/responsive.css';
import '../css/ionicons.css';

import ProfileImg from '../images/sam_image.jpg';
import BackgroundImg from '../images/sam_background.jpg';

import ProfileSection from '../components/ProfileSection.js';
import AboutSection from '../components/AboutSection.js';
import ProjectSection from '../components/ProjectSection.js';
import EducationSection from '../components/EducationSection.js';

import proj1 from '../images/portfolio-1-600x400.jpg';
import proj2 from '../images/portfolio-7-600x800.jpg';
import proj3 from '../images/portfolio-2-600x400.jpg';
import proj4 from '../images/portfolio-8-300x400.jpg';
import proj5 from '../images/portfolio-9-300x400.jpg';

import test1 from '../images/test1.jpg';
import test2 from '../images/test2.jpg';


export default class SamPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Sam Laitha', 
            address: 'Seaside CA',
            phoneNumber: '(831) 521-0869',
            email: 'samlaitha@gmail.com',
            linkedin: 'https://www.linkedin.com/in/srangsan-laitha-192b71123/',
            gitHub: '',
            picture: '',
            personalDescription: 'Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit, quis consequat nulla effi citur at. Maecenas sed massa tristique.Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit, quis consequat nulla effi citur at.Maecenas sed massa tristique.',
            skills: [
                {name: 'HTML5 & CSS', percent: '90%', number: 90},
                {name: 'WEB DESIGN', percent: '75%', number: 75},
                {name: 'SWIFT', percent: '80%', number: 80},
                {name: 'REACT.JS', percent: '70%', number: 70},
            ],
            project: [
                {projectName: 'IOS', source: proj1, description: 'Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales. Lorem ipsum dolor sit amet,'},
                {projectName: 'Agflow', source: test1, description: 'Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales. Lorem ipsum dolor sit amet,'},
                {projectName: 'Web Design', source: proj3, description: 'Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales. Lorem ipsum dolor sit amet,'},
            ]
              
        }
      }

    render() {
        return(
            <div>
                <ProfileSection 
                    profileImg={ProfileImg}
                    BackgroundImg={BackgroundImg}
                    name={this.state.name}
                    address={this.state.address}
                    phoneNumber={this.state.phoneNumber}
                    email={this.state.email}
                    linkedin={this.state.linkedin}
                />

                <ProjectSection 
                    project={this.state.project}
                />

                <AboutSection
                     personalDescription={this.state.personalDescription}
                     skills={this.state.skills}
                />

                <EducationSection/>
                
            </div>
        );
    }
}