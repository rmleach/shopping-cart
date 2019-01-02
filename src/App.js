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
			cartList: []
		}
	}

addItem = (event) => {
	event.preventDefault()
	console.log('even', event)
	//add item to cartList
}

handleChange = (event) => {
    this.setState({
			value: event.target.value
		});
		console.log()
  }

  quantityChange = (event) => {
    this.setState({
			value: event.target.value
		});
		console.log()
  }


  handleSubmit = (event) => {
    alert(this.state.value) 
		console.log(this.state.products);
    event.preventDefault(event);
  }

  render() {
		const cartItemList = [
  		// { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
  		// { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
  		// { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
		]

    return (
      <div>
				<CartHeader/>
				<CartItems cartItemList={cartItemList}/>
				<AddItem 
					addItem = {this.addItem}
					products={this.state.products}
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
				/>
				<CartFooter copyright='2018'/>
      </div>
    );
  }
}

export default App;
