import React from 'react'
import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <CVForm {...this.props}/>
            <CVPreview {...this.props}/>
      </div>
    );
  }
}

export default Main;
