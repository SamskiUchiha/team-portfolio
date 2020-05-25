import React from 'react';
import '../css/portfolio.css';
import '../css/responsive.css';
import '../css/ionicons.css';

import profileImg from '../images/profile-1-250x250.jpg';

import ProfilePage from '../components/ProfilePage.js';
import AboutSection from '../components/AboutSection.js';

import proj1 from '../images/portfolio-1-600x400.jpg';
import proj2 from '../images/portfolio-7-600x800.jpg';
import proj3 from '../images/portfolio-2-600x400.jpg';
import proj4 from '../images/portfolio-8-300x400.jpg';
import proj5 from '../images/portfolio-9-300x400.jpg';

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
            ]
              
        }
      }

    render() {
        return(
            <div>
                <ProfilePage 
                    profileImg={profileImg}
                    name={this.state.name}
                    address={this.state.address}
                    phoneNumber={this.state.phoneNumber}
                    email={this.state.email}
                    linkedin={this.state.linkedin}
                />

                <AboutSection
                     personalDescription={this.state.personalDescription}
                     skills={this.state.skills}
                />
            </div>
        );
    }
}