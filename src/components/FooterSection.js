import React from 'react';
import '../css/portfolio.css';
import '../css/responsive.css';

export default class FooterSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: new Date().getFullYear()
        }
    }

    date() {

    }
    render() {
        return(
            <>
            <div>
                <footer>
                    <section class="copyright">
                        {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                        Copyright &copy;{this.state.year} All rights reserved | This template is made with <i class="ion-heart" aria-hidden="true"></i> by <a href="https://colorlib.com">Colorlib</a>
                        {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                    </section>
                </footer>
            </div>
               
        </>
        );
    }
}
