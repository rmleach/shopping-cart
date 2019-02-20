import React from 'react'

const AddItem = (props) => {


    return (
			<div className='container'>
			<p>Total Price: ${props.total}</p>
      <form onSubmit={props.addItem}>
        <label className = 'quantity'>
          Quantity:
        </label>
				<div>
					<input number={props.value} onChange={props.quantityChange} required/>
				</div>
				<select required onChange={props.selectItem}>
          <option value=''>Choose...</option>ç
			    {props.products.map(
						product => <option key={product.id} value={product.name} required>{product.name}</option>)}
				</select>				
				<div>
					<input type="submit" value="Submit" />
				</div>
        
      </form>
			</div>
    );
}


export default AddItem