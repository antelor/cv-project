import React from 'react'
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wholeName: "",
      adress: "",
      phone: "",
      email: "",
      description: "",
      age: "",
      
      education: [
        {
          school: "",
          degree: "",
          yearStart: "",
          yearEnd: "",
        },
      ],

      experience: [
        {
          position: "",
          company: "",
          yearStart: "",
          yearEnd: "",
        },
      ],

    }

    //General
    this.changeName = this.changeName.bind(this);
    this.changeAdress = this.changeAdress.bind(this);
    this.changePhone = this.changePhone.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeDesc = this.changeDesc.bind(this);
    this.changeAge = this.changeAge.bind(this);

    //Educacion
    this.changeSchool = this.changeSchool.bind(this);
    this.changeDeg = this.changeDeg.bind(this);
    this.changeEYearStart = this.changeEYearStart.bind(this);
    this.changeEYearEnd = this.changeEYearEnd.bind(this);

    this.addEd = this.addEd.bind(this);
    this.removeEd = this.removeEd.bind(this);

    //Experiencia
    this.changePosition = this.changePosition.bind(this);
    this.changeCompany = this.changeCompany.bind(this);
    this.changeExpYearStart = this.changeExpYearStart.bind(this);
    this.changeExpYearEnd = this.changeExpYearEnd.bind(this);

    this.addExp = this.addExp.bind(this);
    this.removeExp = this.removeExp.bind(this);
  }

  //General
  changeName = (e) => {
    this.setState({
      wholeName: e.target.value,
    });
  }
  
  changeAdress = (e) => {
    this.setState({
      adress: e.target.value,
    });
  }

  changePhone = (e) => {
    this.setState({
      phone: e.target.value,
    });
  }

  changeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  }

  changeDesc = (e) => {
    this.setState({
      description: e.target.value,
    });
  }

  changeAge = (e) => {
    this.setState({
      age: e.target.value,
    });
  }

  //Educacion
  changeSchool = (e) => {
    let copyState = this.state;
    copyState.education[copyState.education.length - 1].school = e.target.value;

    this.setState({
      copyState
    });
  }

  changeDeg = (e) => {
    let copyState = this.state;
    copyState.education[copyState.education.length - 1].degree = e.target.value;

    this.setState({
      copyState
    });
  }

  changeEYearStart = (e) => {
    let copyState = this.state;
    copyState.education[copyState.education.length - 1].yearStart = e.target.value;

    this.setState({
      copyState
    });
  }

  changeEYearEnd = (e) => {
    let copyState = this.state;
    copyState.education[copyState.education.length - 1].yearEnd = e.target.value;

    this.setState({
      copyState
    });
  }

  addEd = () => {
    let copyState = this.state;

    copyState.education.push({
      school: "",
      degree: "",
      yearStart: "",
      yearEnd: "",
    });

    this.setState({
      copyState
    });
  };

  removeEd = () => {
    let copyState = this.state;

    copyState.education.pop();

    this.setState({
      copyState
    });
  }

  //Experiencia
  changePosition = (e) => {
    let copyState = this.state;
    copyState.experience[copyState.experience.length - 1].position = e.target.value;

    this.setState({
      copyState
    });
  }

  changeCompany = (e) => {
    let copyState = this.state;
    copyState.experience[copyState.experience.length - 1].company = e.target.value;

    this.setState({
      copyState
    });
  }

  changeExpYearStart = (e) => {
    let copyState = this.state;
    copyState.experience[copyState.experience.length - 1].yearStart = e.target.value;

    this.setState({
      copyState
    });
  }

  changeExpYearEnd = (e) => {
    let copyState = this.state;
    copyState.experience[copyState.experience.length - 1].yearEnd = e.target.value;

    this.setState({
      copyState
    });
  }

  addExp = () => {
    let copyState = this.state;

    copyState.experience.push({
      position: "",
      company: "",
      yearStart: "",
      yearEnd: "",
    });

    this.setState({
      copyState
    });
  };

  removeExp = () => {
    let copyState = this.state;

    copyState.experience.pop();

    this.setState({
      copyState
    });
  }

  render() {
    let functs = {
      'changeName': this.changeName,
      'changeAdress': this.changeAdress,
      'changePhone': this.changePhone,
      'changeEmail': this.changeEmail,
      'changeAge': this.changeAge,
      'changeDesc': this.changeDesc,

      'changeSchool': this.changeSchool,
      'changeDeg': this.changeDeg,
      'changeEYearStart': this.changeEYearStart,
      'changeEYearEnd': this.changeEYearEnd,
      'addEd': this.addEd,
      'removeEd': this.removeEd,

      'changePosition': this.changePosition,
      'changeCompany': this.changeCompany,
      'changeExpYearStart': this.changeExpYearStart,
      'changeExpYearEnd': this.changeExpYearEnd,
      'addExp': this.addExp,
      'removeExp': this.removeExp,
    };

    return (
      <>
        <Header />
        <Main {...this.state} functions={functs}/>
        <Footer />
      </>
    );
  }
}

export default App;
