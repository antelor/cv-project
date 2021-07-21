import React from 'react'

class General extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (      
          <div>
                <div>
                    General  
                </div>
                <div class="generalContent">
                    <input
                      onChange={this.props.functions.changeName}
                      placeholder="Nombre"
                    />
                    
                    <input
                      onChange={this.props.functions.changePhone}
                      placeholder="Telefono"
                    />
                  
                    <input
                      onChange={this.props.functions.changeAdress}
                      placeholder="Direccion"
                    />
                    <input
                      onChange={this.props.functions.changeEmail}
                      placeholder="E-mail"
                    />
                    <input
                      onChange={this.props.functions.changeDesc}
                      placeholder="Descripcion"
                    />
                    <input
                      onChange={this.props.functions.changeAge}
                      placeholder="Fecha de nacimiento"
                    />
                </div>
            </div>
    );
  }
}

export default General;
