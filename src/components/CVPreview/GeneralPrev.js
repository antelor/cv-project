import React from 'react'

class GeneralPrev extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            Nombre: {this.props.wholeName}
            Direccion: {this.props.adress}
            Telefono: {this.props.phone}
            E-mail: {this.props.email}
            Descripcion: {this.props.description}
            Edad: {this.props.age}
        </div>
    );
  }
}

export default GeneralPrev;
