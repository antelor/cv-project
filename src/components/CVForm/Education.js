import React from 'react'

class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            Estudios:
            {this.props.education.map((item, index, arr) => {
                if (index == arr.length - 1) {
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
                }
                else {
                    return <div>
                        Establecimiento: {item.school}
                        Titulo: {item.degree}
                        Desde: {item.yearStart}
                        Hasta: {item.yearEnd}
                    </div>
                }
            })}

            <button onClick={this.props.functions.addEd}>Agregar</button>
            <button onClick={this.props.functions.removeEd}>Eliminar</button>
        </div>
    );
  }
}

export default Education;
