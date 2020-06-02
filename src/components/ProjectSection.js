import React from 'react';
import '../css/portfolio.css';
import '../css/responsive.css';
import Gallery from 'react-photo-gallery';

import test1 from '../images/test1.jpg';
import test2 from '../images/test2.jpg';


const PHOTO_SET = [
    {
      src: test1,
      width: 1,
      height: 1
    },
    {
      src: test2,
      width: 1,
      height: 1
    },
    {
        src: test1,
        width: 1,
        height: 1
    },
    {
        src: test2,
        width: 1,
        height: 1
    },
    {
        src: test1,
        width: 1,
        height: 1
    },
    {
        src: test2,
        width: 1,
        height: 1
    }
  ];


export default class ProjectSection extends React.Component {
    constructor(props) {
        super(props);
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
                                    {/* <h6 class="font-lite-black"><b>PROFESSIONAL PATH</b></h6> */}
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
                        <Gallery photos={PHOTO_SET} columns={3} direction={'column'} margin={10}/>
                    </div>
                    {/* <!-- container --> */}
                </section>
                {/* <!-- about-section --> */}
            </>
        );
    }
}
