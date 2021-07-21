import React from 'react'

class General extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (      
        <div>
            Nombre: <input
                onChange={this.props.functions.changeName}
            />
            
            Direccion: <input
                onChange={this.props.functions.changeAdress}
            />
            Telefono: <input
                onChange={this.props.functions.changePhone}
            />
            E-mail: <input
                onChange={this.props.functions.changeEmail}
            />
            Descripcion: <input
                onChange={this.props.functions.changeDesc}
            />
            Edad: <input
                onChange={this.props.functions.changeAge}
            />
        </div>
    );
  }
}

export default General;
