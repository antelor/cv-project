import React from 'react'
import '../../styles/CVPreview.css';

class CVPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div class="formDiv">
            <div class="prevHeader">
                {this.props.wholeName}
            </div>
            <div class="genPrev">
                <label>
                    Telefono: {this.props.phone}
                </label>

                <label>
                    Direccion: {this.props.adress}
                </label>

                <label>
                    E-mail: {this.props.email}
                </label>

                <label>
                    Descripcion: {this.props.description}
                </label>

                <label>
                    Fecha de nacimiento: {this.props.age}
                </label>
            </div>

            <div class="edPrev">
                <div class="title">Estudios</div>
                {this.props.education.map((item) => {
                    return <div class="edItem">
                        <div class="year">
                            {item.yearStart} - {item.yearEnd}
                        </div>
                        <div>
                            {item.degree} en {item.school}
                        </div>
                    </div>
                })}
            </div>

            <div class="expPrev">
                <div class="title">Estudios</div>
                {this.props.experience.map((item) => {
                    return <div class="edItem">
                        <div class="year">
                            {item.yearStart} - {item.yearEnd}
                        </div>
                        <div>
                            {item.position} en {item.company}
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
  }
}

export default CVPreview;
