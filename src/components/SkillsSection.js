import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../css/skills.css';

export default class SkillsSection extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    renderObject(){
		return Object.entries(this.props.skills).map(([key, value], i) => {
			return (
                <div key={key}>
                    <div className="skill-item">
                        <span>{value.name}</span>
                        <span style={{float: "right"}}>{value.percent}</span>
                    </div>
                    <ProgressBar variant="warning" now={value.number} />
                </div>
			)
		})
	}
    render() {
        return(
            <>
            <section className="skill-section">
                <div><h3>Skills</h3></div>
                {this.renderObject()}      
            </section>
        </>
        );
    }
}
