import React from 'react';
import '../css/portfolio.css';
import '../css/responsive.css';

import test1 from '../images/test1.jpg';
import test2 from '../images/test2.jpg';


export default class ProjectPhotos extends React.Component {
    render() {
        return(
               <div class="container">

                    <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0">Thumbnail Gallery</h1>

                    <hr class="mt-2 mb-5"/>

                    <div class="row text-center text-lg-left" >

                        <div class="col-xl-3 col-md-4 col-6">
                            <a href="#" class="d-block mb-3 h-100">
                                <img class="img-fluid img-thumbnail" src={test1} alt=""/>
                                </a>
                        </div>
                        <div class="col-xl-3 col-md-4 col-6">
                            <a href="#" class="d-block mb-3 h-100">
                                <img class="img-fluid img-thumbnail" src={test2} alt=""/>
                                </a>
                        </div>
                        <div class="col-xl-3 col-md-4 col-6">
                            <a href="#" class="d-block mb-3 h-100">
                                <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/EUfxH-pze7s/400x300" alt=""/>
                                </a>
                        </div>
                    
                    </div>

                    <div class="row text-center text-lg-left">

                        <div class="col-xl-3 col-md-4 col-6">
                            <a href="#" class="d-block mb-3 h-100">
                                <img class="img-fluid img-thumbnail" src={test1} alt=""/>
                                </a>
                        </div>
                        <div class="col-xl-3 col-md-4 col-6">
                            <a href="#" class="d-block mb-3 h-100">
                                <img class="img-fluid img-thumbnail" src={test2} alt=""/>
                                </a>
                        </div>
                        <div class="col-xl-3 col-md-4 col-6">
                            <a href="#" class="d-block mb-3 h-100">
                                <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/EUfxH-pze7s/400x300" alt=""/>
                                </a>
                        </div>
                    
                    </div>

                </div>
        );
    }
}
