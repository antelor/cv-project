import React from 'react'
import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';
import '../styles/Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div class="mainDiv">
            <div class="form">
                <CVForm {...this.props}/>
            </div>
            <div class="preview">
                <CVPreview {...this.props}/>
            </div>
        </div>
    );
  }
}

export default Main;
