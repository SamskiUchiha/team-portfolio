import React from 'react';
import '../css/portfolio.css';
import '../css/responsive.css';

import test1 from '../images/test1.jpg';
import test2 from '../images/test2.jpg';


export default class ProjectPhotos extends React.Component {
    renderObject(){
		return Object.entries(this.props.project).map(([key, value], i) => {
			return (
                <div key={key} class="col-sm project-section">
                <a href="#" class="d-block mb-3 h-100 project-section-a">
                    <img class="img-fluid img-thumbnail" src={value.source} alt=""/>
                    </a>
                </div>
			)
		})
	}

    render() {
        return(
            <div class="container">

                <div class="row text-center text-lg-left">
                    {this.renderObject()}
                </div>

                <div class="row text-center text-lg-left">
                    {this.renderObject()}
                </div>

            </div>
        );
    }
}
