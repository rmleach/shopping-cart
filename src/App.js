import React, { Component } from 'react';
import './App.css';
import CartHeader from './components/header';
import CartFooter from './components/footer';
import CartItems from './components/items';
import AddItem from './components/AddItem';


class App extends Component {
	constructor () {
		super()
		this.state = {
			products: [
  			{ id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
  			{ id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
  			{ id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
  			{ id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
  			{ id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
  			{ id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
  			{ id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
  			{ id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
  			{ id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
			],	
			value: 0		
		}
	}


  quantityChange = (event) => {
    this.setState({
			value: event.target.value
		});
  }

  productChange = (event) => {
    this.setState({
			name: event.target.value
		});
  }


  // handleSubmit = (event) => {
  //   alert('An essay was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

  render() {
		const cartItemList = [
  		{ id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
  		{ id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
  		{ id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
		]
    return (
      <div>
				<CartHeader/>
				<CartItems cartItemList={this.state.cartOrder}/>
				<AddItem 
					itemAdd={this.state.products}
					quantityChange={this.quantityChange}
					productChange={this.productChange}
					/>
				<CartFooter copyright='© 2018'/>
      </div>
    );
  }
}

export default App;
