import React from 'react';
import './css/nav.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import HomePage from './pages/HomePage.js';
import ContactPage from './pages/ContactPage.js';
import AboutPage from './pages/AboutPage.js';
import SamPage from './pages/SamPage.js';
import SantiPage from './pages/SantiPage.js';
import MartinPage from './pages/MartinPage.js';
import AntonioPage from './pages/AntonioPage.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'},
        {title: 'Sam Portfolio', path: '/samPage'},
        {title: 'Santiago Portfolio', path: '/santiPage'},
        {title: 'Martin Portfolio', path: '/martinPage'},
        {title: 'Antonio Portfolio', path: '/antonioPage'},
      ],
    }
  }

  openSM() {
    document.getElementById("sideMenu").style.width = "200px";
    document.getElementById("pg-content").style.marginRight = "0px";
    
  }

  closeSM() {
    document.getElementById("sideMenu").style.width = "0";
    document.getElementById("pg-content").style.marginRight = "0";
  }

  toggleSM = () => {
    if (document !== null) {
      const width = document.getElementById("sideMenu").style.width;
      const marginLeft = document.getElementById("pg-content").style.marginLeft;

      document.getElementById("sideMenu").style.width = (width === "175px" ? "0" : "175px");
      document.getElementById("pg-content").style.marginLeft = (marginLeft === "0" ? "0" : "0");
    }
  }

  render() {
    return (
      <Router>
        <body>
          <div id="sideMenu" className="sideMenu">  

            <div className="sm-wrapper">
            <div className="menu-pointer menu-pointer-close"  onClick={this.toggleSM}>&#9776;</div>
              {/* <div className="logo"><img style={{height:'100px',width:'100px'}} src={logo} alt="logo_image" /></div> */}
              
              <Link className="nav-link" to="/"> Home</Link>
              {/* <Link className="nav-link" to="/about"> About</Link> */}
              <Link className="nav-link" to="/samPage"> Sam</Link>
              <Link className="nav-link" to="/santiPage"> Santiago</Link>
              <Link className="nav-link" to="/martinPage"> Martin</Link>
              <Link className="nav-link" to="/antonioPage"> Antonio</Link>
              {/* <Link className="nav-link" to="/contact"> Contact</Link> */}
            </div>
          </div>

          {/* CONTENTS -------------------------------  */}
          <div id="pg-content">
          
          <Navbar className="nav-wrapper" style={{backgroundColor: "#FFFFFF", position: "sticky"}} fixed="top">
            <Container className="wrapper-nav">
            <div className="menu-pointer"  onClick={this.toggleSM}>&#9776;</div>
            <Navbar.Brand><span className="brand-name">Portfolio<span style={{color: "blue"}}>.</span></span></Navbar.Brand>
              
            </Container>
              {/* <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                 
                  
                </Navbar.Text>
              </Navbar.Collapse> */}
          
          </Navbar>
            
            <div className="main-contents">
              {/* <div className="wrapper-tb">test</div> */}
            {/* <img style={{height:'100px',width:'300px'}} src={logo} alt="logo_image" /> */}
              {/* {/* <Route path="/" exact render={() => <WorkflowsPage title={this.state.Workflows.title} />} /> */}
              <Route path="/" exact render={() => <HomePage />} />
              {/* <Route path="/about" exact render={() => <AboutPage />} /> */}
              {/* <Route path="/contact" exact render={() => <ContactPage />} /> */}
              <Route path="/samPage" exact render={() => <SamPage />} />
              <Route path="/santiPage" exact render={() => <SantiPage />} />
              <Route path="/martinPage" exact render={() => <MartinPage />} />
              <Route path="/antonioPage" exact render={() => <AntonioPage />} />
            </div>
   
          </div>
        </body>
      </Router>
    );
  }
}

export default App;