
import React, {Component} from 'react'

class CartFooter extends Component {
  render (){
	return (
		<div>
			<nav className="navbar navbar-dark bg-dark">
  			<a className="navbar-brand" href="/#">{this.props.copyright}</a>
			</nav>
		</div>
  )
	};
}

export default CartFooter