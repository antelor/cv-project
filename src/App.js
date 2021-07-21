import React from 'react'
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wholeName: "1",
      adress: "3",
      phone: "4",
      email: "5",
      description: "6",
      age: "15",

      experience: [
        {
          position: "7",
          company: "8",
          yearStart: "9",
          yearEnd: "10",
        },
        {
          position: "7",
          company: "8",
          yearStart: "9",
          yearEnd: "10",
        },
      ],

      education: [
        {
          school: "11",
          degree: "12",
          yearStart: "9",
          yearEnd: "10",
        },
        {
          school: "11",
          degree: "12",
          yearStart: "9",
          yearEnd: "10",
        },
      ],
    }

    this.changeName = this.changeName.bind(this);
    this.changeAdress = this.changeAdress.bind(this);
    this.changePhone = this.changePhone.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeDesc = this.changeDesc.bind(this);
    this.changeAge = this.changeAge.bind(this);

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

  render() {
    let functs = {
      'changeName': this.changeName,
      'changeAdress': this.changeAdress,
      'changePhone': this.changePhone,
      'changeEmail': this.changeEmail,
      'changeAge': this.changeAge,
      'changeDesc': this.changeDesc,
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
