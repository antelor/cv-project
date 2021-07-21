import React from 'react'

class Experience extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            Experiencia:
            {this.props.experience.map((item, index, arr) => {
                if (index == arr.length - 1) {
                    return <div>
                        Posicion: <input
                            onChange={this.props.functions.changePosition}
                        />
                        Compania: <input
                                onChange={this.props.functions.changeCompany}
                            />
                        Desde: <input
                                onChange={this.props.functions.changeExpYearStart}
                            />
                        Hasta: <input
                                onChange={this.props.functions.changeExpYearEnd}
                            />
                        </div>
                }
                else {
                    return <div>
                        Posicion: {item.position}
                        Compania: {item.company}
                        Desde: {item.yearStart}
                        Hasta: {item.yearEnd}
                    </div>
                }
            })}

            <button onClick={this.props.functions.addExp}>Agregar</button>
            <button onClick={this.props.functions.removeExp}>Eliminar</button>
        </div>
    );
  }
}

export default Experience;
