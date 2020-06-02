import React from 'react';
import '../css/portfolio.css';
import '../css/responsive.css';

export default class ProfileSection extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return(
            <>
            <section style={{backgroundImage: `url(${this.props.BackgroundImg})` }} class="intro-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-1 col-lg-2"></div>
                        <div class="col-md-10 col-lg-8">
                            <div class="intro">
                                <div class="profile-img"><img src={this.props.profileImg} alt=""/></div>
                                <h2><b>{this.props.name}</b></h2>
                                {/* <h4 class="font-yellow">Key Account Manager</h4> */}
                                <ul class="information margin-tb-30">
                                    <li><b>ADDRESS : </b>{this.props.address}</li>
                                    <li><b>EMAIL : </b>{this.props.email}</li>
                                    <li><b>PHONE NUMBER : </b>{this.props.phoneNumber}</li>
                                </ul>
                                <ul class="social-icons">
                                    <li><a href="#"><i class="ion-social-pinterest"></i></a></li>
                                    <li><a href={this.props.linkedin}><i class="ion-social-linkedin"></i></a></li>
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
        </>
        );
    }
}
