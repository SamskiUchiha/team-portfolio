import React from 'react';
import '../css/portfolio.css';
import '../css/responsive.css';
import '../css/profilecard.css';

export default class ProfileCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <>
                <div class='card'>
                    <img src='https://img.etimg.com/thumb/width-640,height-480,imgsize-216114,resizemode-1,msid-71966504/emperor-penguins-marching-towards-extinction-in-a-warming-world-study.jpg' alt='Avatar'/>
                    <div class='container'>
                        <h4><b>{this.props.name}</b></h4>
                        <p>{this.props.description}</p>
                    </div>
                </div>
            </>
        );
    }
}
