import React from 'react'

const CartItem = (props) => {
	return (
		<div className="collection-item">
			<div className ="list-group">
			<div className ="list-group-item">
		  	<div className="row">
		  	  <div className="col-md-8">{props.product}</div>
		  	  <div className="col-md-2">${props.price.toFixed(2)}</div>
					<div className="col-md-2">{props.quantity}</div>
		  	</div>
			</div>
			</div>
		</div>		
  )
	}

export default CartItem