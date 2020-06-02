import React from 'react';
import Logo from "../images/SchoolBackGroundPicture.jpg";
import ProfileCard from '../components/ProfileCard.js';

export default class HomePage extends React.Component {
    render() {
        return(
            <>
                <div>
                    <img src={Logo} alt="website logo" height="100%" width="100%"/>
                </div>
                <ProfileCard
                    name='Martin'
                    description='Test Description to see if this works or not.'
                />
            </>
        );
    }
}