import React, {Component} from 'react'

const AddItem = (props) => {
	let newItem = {
		product: {
    id: 40,
    name: 'Mediocre Iron Watch',
    priceInCents: 399
  },
  quantity: 1
	}


		// const stuff = props.itemAdd.map((item, idx) => {
		// 	return(
		// 		<option key = {idx}>{item.name} ${item.priceInCents/100} {props.value}</option>
		// 	)
		// })
    return (
      <form onSubmit={props.addItem}>
        <label className = 'quantity'>
          Quantity:
        </label>
				<div>
					<input number={props.value} onChange={props.handleChange} />
				</div>
				<select onChange={props.handleChange}>
			    {/* {stuff} */}
					<option>apple</option>
					<option>banana</option>
					<option>orange</option>
					
				</select>				
				<div>
					<input type="submit" value="Submit" />
				</div>
        
      </form>
    );
}


export default AddItem