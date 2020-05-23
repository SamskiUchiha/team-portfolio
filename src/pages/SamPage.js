import React from 'react';
import '../css/portfolio.css';
import '../css/responsive.css';
import '../css/ionicons.css';

import picture from '../images/profile-1-250x250.jpg';
import ProfilePage from '../components/ProfilePage.js';

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
            address: '5100 coe ave spc 38',
            phoneNumber: '(831) 521-0869',
            email: 'samlaitha@gmail.com',
            linkedin: '',
            gitHub: '',
            picture: '',
        }
      }

    render() {
        return(
            <div>
               
            <div>
                <ProfilePage/>
            </div>
        </div>
        );
    }
}