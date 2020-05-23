import React from 'react';
import '../css/portfolio.css';
import '../css/responsive.css';

import picture from '../images/profile-1-250x250.jpg';

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
                <section class="intro-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-1 col-lg-2"></div>
                        <div class="col-md-10 col-lg-8">
                            <div class="intro">
                                <div class="profile-img"><img src={picture} alt=""/></div>
                                <h2><b>{this.state.name}</b></h2>
                                {/* <h4 class="font-yellow">Key Account Manager</h4> */}
                                <ul class="information margin-tb-30">
                                    <li><b>ADDRESS : </b>{this.state.address}</li>
                                    <li><b>EMAIL : </b>{this.state.email}</li>
                                    <li><b>PHONE NUMBER : </b>{this.state.phoneNumber}</li>
                                </ul>
                                <ul class="social-icons">
                                    <li><a href="#"><i class="ion-social-pinterest"></i></a></li>
                                    <li><a href="#"><i class="ion-social-linkedin"></i></a></li>
                                    <li><a href="#"><i class="ion-social-instagram"></i></a></li>
                                    <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                                    <li><a href="#"><i class="ion-social-twitter"></i></a></li>
                                </ul>
                            </div>
                            {/* <!-- intro --> */}
                        </div>
                        {/* <!-- col-sm-8 --> */}
                    </div>
                    {/* <!-- row --> */}
                </div>
                {/* <!-- container --> */}
            </section>
            {/* <!-- intro-section --> */}
        </div>
        );
    }
}