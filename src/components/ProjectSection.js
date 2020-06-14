import React from 'react';
import '../css/portfolio.css';
import '../css/responsive.css';

import ProjectPhotos from '../components/ProjectPhotos.js'



export default class ProjectSection extends React.Component {
    constructor(props) {
        super(props);
    }

    test() {
        alert("Works");
    }

    render() {
        return(
            <>
                <section class="about-section section">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-md-3">
                                <div class="heading">
                                    <h3><b>Projects</b></h3>
                                    <h6 class="font-lite-black"><b>PROFESSIONAL PATH</b></h6>
                                </div>
                            </div>
                            {/* <!-- col-sm-3 --> */}
                            <div class="col-sm-12 col-md-9">
                                <p class="margin-b-50">
                                    {this.props.personalDescription}
                                </p>
                                
                            </div>
                            {/* <!-- col-sm-9 --> */}
                        </div>
                        {/* <!-- row --> */}
                    </div>
                    {/* <!-- container --> */}

                    <ProjectPhotos project={this.props.project}/>
                </section>
                {/* <!-- about-section --> */}
            </>
        );
    }
}
