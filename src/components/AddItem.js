import React from 'react'

const AddItem = (props) => {
	let newItem = {
		product: {
    id: 40,
    name: 'Mediocre Iron Watch',
    priceInCents: 399
  },
  quantity: 1
	}

    return (
      <form onSubmit={props.addItem}>
        <label className = 'quantity'>
          Quantity:
        </label>
				<div>
					<input number={props.value} onChange={props.handleChange} />
				</div>
				<select onChange={props.handleChange}>
			    {props.products.map(product => <option key={product.id} value={product.id}>{product.name}</option>)}
					
					
				</select>				
				<div>
					<input type="submit" value="Submit" />
				</div>
        
      </form>
    );
}


export default AddItem