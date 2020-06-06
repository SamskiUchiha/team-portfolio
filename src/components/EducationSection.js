import React from 'react';
import '../css/portfolio.css';
import '../css/responsive.css';

export default class EducationSection extends React.Component {
    render() {
        return(
            <>
            <section class="education-section section">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-3">
                            <div class="heading">
                                <h3><b>Education</b></h3>
                                <h6 class="font-lite-black"><b>ACADEMIC CAREER</b></h6>
                            </div>
                        </div>
                        {/* <!-- col-sm-3 --> */}
                        
                        <div class="col-sm-12 col-md-9">
                        
                            <div class="education-wrapper">
                                <div class="education margin-b-50">
                                    <h4><b>MASTER DEGREE IN SCIENCE</b></h4>
                                    <h5 class="font-yellow"><b>UCLA - SCIENCE AND ENGINEERING</b></h5>
                                    <h6 class="font-lite-black margin-t-10">GRADUATED IN MAY 2010(2 YEARS)</h6>
                                    <p class="margin-tb-30">Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales. 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit, 
                                    quis consequat nulla effi citur at. Maecenas sed massa tristique.Duis non volutpat arcu, 
                                    eu mollis tellus. Sed finibus aliquam neque sit amet sodales. </p>
                                </div>
                                {/* <!-- education --> */}
                                
                                <div class="education margin-b-50">
                                    <h4><b>COURSE ON COMPUTER SCIENCE</b></h4>
                                    <h5 class="font-yellow"><b>NEW YORK PUBLIC UNIVERSITY</b></h5>
                                    <h6 class="font-lite-black margin-t-10">GRADUATED IN MAY 2009(6 MONTHS)</h6>
                                    <p class="margin-tb-30">Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales. 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit, 
                                    quis consequat nulla effi citur at. Maecenas sed massa tristique.Duis non volutpat arcu, 
                                    eu mollis tellus. Sed finibus aliquam neque sit amet sodales. </p>
                                </div>
                                {/* <!-- education --> */}
                                
                                <div class="education margin-b-50">
                                    <h4><b>GRADUATED VALEDICTERIAN</b></h4>
                                    <h5 class="font-yellow"><b>PUBLIC COLLEGE</b></h5>
                                    <h6 class="font-lite-black margin-t-10">GRADUATED IN MAY 2008(4 YEARS)</h6>
                                    <p class="margin-tb-30">Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales. 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit, 
                                    quis consequat nulla effi citur at. Maecenas sed massa tristique.Duis non volutpat arcu, 
                                    eu mollis tellus. Sed finibus aliquam neque sit amet sodales. </p>
                                </div>
                                {/* <!-- education --> */}
                            </div>
                            {/* <!-- education-wrapper --> */}
                        </div>
                        {/* <!-- col-sm-9 --> */}
                    </div>
                    {/* <!-- row --> */}
                </div>
                {/* <!-- container --> */}
                
            </section>
            {/* <!-- education-section --> */}
               
        </>
        );
    }
}
