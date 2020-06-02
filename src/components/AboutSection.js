import React from 'react';
import '../css/portfolio.css';
import '../css/responsive.css';

import SkillsSection from '../components/SkillsSection.js';

export default class AboutSection extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return(
            <>
                <section class="about-section section">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-md-3">
                                <div class="heading">
                                    <h3><b>About me</b></h3>
                                    <h6 class="font-lite-black"><b>PROFESSIONAL PATH</b></h6>
                                </div>
                            </div>
                            {/* <!-- col-sm-3 --> */}
                            <div class="col-sm-12 col-md-9">
                                <p class="margin-b-50">
                                    {this.props.personalDescription}
                                </p>

                               
                                <SkillsSection skills={this.props.skills}/>
                                
                                
                            </div>
                            {/* <!-- col-sm-9 --> */}
                        </div>
                        {/* <!-- row --> */}
                    </div>
                    {/* <!-- container --> */}
                </section>
                {/* <!-- about-section --> */}
            </>
        );
    }
}
