import React from 'react'

class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <div>
                Estudios
            </div>
            <div class="edContent">
                {this.props.education.map((item, index, arr) => {
                    if (index == arr.length - 1) {
                        return <div>
                            <input
                                onChange={this.props.functions.changeDeg}
                                placeholder="Titulo"
                            />
                            <input
                                onChange={this.props.functions.changeSchool}
                                placeholder="Establecimiento"
                            />
                            <input
                                onChange={this.props.functions.changeEYearStart}
                                placeholder="Desde"
                            />
                            <input
                                onChange={this.props.functions.changeEYearEnd}
                                placeholder="Hasta"
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
        </div>
    );
  }
}

export default Education;
