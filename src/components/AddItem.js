import React, {Component} from 'react'

class AddItem extends Component {

  render() {
		const stuff = this.props.itemAdd.map((item, idx) => {
			return(
				<option key = {idx}>{item.name} ${item.priceInCents/100}</option>
			)
		})
    return (
      <form>
				<div>
        <label className = 'quantity'>
          Quantity:
        </label>
					<input onChange={this.props.quantityChange} />
				</div>
				<select onChange= {this.props.productChange}>
  				{stuff}
				</select>				
				<div>
					<input type="submit" value="Submit" />
				</div>
        
      </form>
    );
  }
}

export default AddItem