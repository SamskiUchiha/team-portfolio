import React from 'react';
import ProfileCard from '../components/ProfileCard.js';

export default class HomePage extends React.Component {
    render() {
        return(
            <>
                <ProfileCard
                    name='Martin'
                    description='Test Description to see if this works or not.'
                />
            </>
        );
    }
}