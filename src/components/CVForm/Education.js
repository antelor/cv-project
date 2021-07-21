import React from 'react'

class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            Estudios:
            {this.props.education.map((item) => {
                return <div>
                    Establecimiento: <input
                        onChange={this.props.functions.changeSchool}
                    />
                    Titulo: <input
                        onChange={this.props.functions.changeDeg}
                    />
                    Desde: <input
                        onChange={this.props.functions.changeEYearStart}
                    />
                    Hasta: <input
                        onChange={this.props.functions.changeEYearEnd}
                    />
                </div>
            })}

            <button>Agregar</button>
        </div>
    );
  }
}

export default Education;
