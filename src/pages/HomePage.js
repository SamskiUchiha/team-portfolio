import React from 'react';
import Logo from "../images/SchoolBackGroundPicture.jpg";


export default class HomePage extends React.Component {
    render() {
        return(
            <div>
                
                <img src={Logo} alt="website logo" height="100%" width="100%"/>
            </div>
            
        );
    }
}