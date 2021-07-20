import React from 'react'
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wholeName: "1",
      address: "3",
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
  }

  render() {
    return (
      <>
        <Header />
        <Main {...this.state}/>
        <Footer />
      </>
    );
  }
}

export default App;
