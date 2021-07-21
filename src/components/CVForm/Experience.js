import React from 'react'

class Experience extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <div>
                Experiencia
            </div>
            <div class="expContent">
                {this.props.experience.map((item, index, arr) => {
                    if (index == arr.length - 1) {
                        return <div>
                            <input
                                onChange={this.props.functions.changePosition}
                                placeholder="Posicion"
                            />
                            <input
                                onChange={this.props.functions.changeCompany}
                                placeholder="Compania"
                            />
                            <input
                                onChange={this.props.functions.changeExpYearStart}
                                placeholder="Desde"
                            />
                            <input
                                onChange={this.props.functions.changeExpYearEnd}
                                placeholder="Hasta"
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
        </div>
    );
  }
}

export default Experience;
