import React from 'react'

class EducationPrev extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            Estudios:
            {this.props.education.map((item) => {
                return <div>
                    Establecimiento: {item.school}
                    Titulo: {item.degree}
                    Desde: {item.yearStart}
                    Hasta: {item.yearEnd}
                </div>
            })}
        </div>
    );
  }
}

export default EducationPrev;
