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
        {
          position: "",
          company: "",
          yearStart: "",
          yearEnd: "",
        },
      ],

    }

    this.changeName = this.changeName.bind(this);
    this.changeAdress = this.changeAdress.bind(this);
    this.changePhone = this.changePhone.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeDesc = this.changeDesc.bind(this);
    this.changeAge = this.changeAge.bind(this);

    this.changeSchool = this.changeSchool.bind(this);
    this.changeDeg = this.changeDeg.bind(this);
    this.changeEYearStart = this.changeEYearStart.bind(this);
    this.changeEYearEnd = this.changeEYearEnd.bind(this);
  }

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
