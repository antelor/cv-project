import React from 'react'

class ExperiencePrev extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            Experiencia:
            {this.props.experience.map((item) => {
                return <div>
                    Posicion: {item.position}
                    Compania: {item.company}
                    Desde: {item.yearStart}
                    Hasta: {item.yearEnd}
                </div>
            })}
        </div>
    );
  }
}

export default ExperiencePrev;
