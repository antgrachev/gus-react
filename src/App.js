import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from './components/Items';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
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
        {
          id: 5,
          title: 'Гульфик',
          img: '1.png',
          desc: '123 Lorem',
          category: '2',
          price: '10.00'
        },
        {
          id: 6,
          title: 'Test',
          img: '4.jpg',
          desc: '123 Lorem',
          category: '1',
          price: '336.00'
        },

      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render() {
    return (
      <div className='wrapper' >
        <Header orders = {this.state.orders}/>
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />

      </div>
    );
  }
  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id) //проверка на задвоение
        isInArray = true
    })
    if (!isInArray)
    this.setState({orders : [...this.state.orders, item]}) //добавление в массив Orders
  }
}

export default App;
