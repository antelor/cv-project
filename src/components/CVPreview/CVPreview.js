import React from 'react'
import EducationPrev from './EducationPrev.js';
import ExperiencePrev from './ExperiencePrev.js';
import GeneralPrev from './GeneralPrev.js';

class CVPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
            <EducationPrev />
            <ExperiencePrev />
            <GeneralPrev />
      </div>
    );
  }
}

export default CVPreview;
