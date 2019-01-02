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
			cartList: [],
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
			name: '',
			price: 0,
			quantity: 0,
			id: 0,
			total: 0,
		}
	}



addItem = (event) => {
	event.preventDefault()
	  let newItem = {
			product: {
    	id: this.state.id,
      name: this.state.name,
      price: this.state.price * this.state.quantity,
  },
  quantity: this.state.quantity
	}
	let prices = this.state.cartList.map(item => item.product.price)
	let total = prices.reduce((acc, cur) => {
		return acc + cur
	}, 0)
	total += newItem.product.price
	this.setState({
		cartList: this.state.cartList.concat([newItem]),
		total: total.toFixed(2),
		})

		console.log(newItem.product.price)
}

selectItem = (event) => {
  event.preventDefault()
	console.log('selectItem called', event.target.value)
	this.setState({
		name: event.target.value
	})
	let item = this.state.products.filter(item => item.name === event.target.value)
		this.setState({
			price: item[0].priceInCents / 100,
			id: item[0].id
		})
		console.log(item)
}

  quantityChange = (event) => {
    this.setState({
			quantity: +event.target.value
		})
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
				<CartItems cartItems={this.state.cartList}/>
				<AddItem 
					addItem = {this.addItem}
					products={this.state.products}
					selectItem={this.selectItem}
					total = {this.state.total}
					quantityChange={this.quantityChange}
					handleSubmit={this.handleSubmit}
				/>
				<CartFooter copyright='2018'/>
      </div>
    );
  }
}

export default App;
