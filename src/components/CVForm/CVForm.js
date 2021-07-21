import React from 'react'
import Education from './Education.js';
import Experience from './Experience.js';
import General from './General.js';
import '../../styles/CVForm.css';

class CVForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div class="formDiv">
            <div class="title">
                Curriculum
            </div>

            <General {...this.props}/>
            <Education {...this.props}/>
            <Experience {...this.props} />            
        </div>
    );
  }
}

export default CVForm;
