import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from './components/Items';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: 'Велосипед',
          img: '1.jpg',
          desc: 'Велосипед имеет 3 колеса и большой детский руль',
          category: '1',
          price: '10.00'
        },
        {
          id: 2,
          title: 'Гольфик',
          img: '2.jpg',
          desc: '222 Lorem',
          category: '2',
          price: '10.00'
        },
        {
          id: 3,
          title: 'Собака',
          img: '3.jpg',
          desc: '333 Lorem',
          category: '3',
          price: '10.00'
        },
        {
          id: 4,
          title: 'Мотоцикл',
          img: '4.jpg',
          desc: '4444 Lorem',
          category: '1',
          price: '10.00'
        },

      ]
    }
  }
  render() {
    return (
      <div className='wrapper' >
        <Header />
        <Items items={this.state.items} />
        <Footer />

      </div>
    );
  }
}

export default App;
