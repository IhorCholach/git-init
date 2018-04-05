import React, {Component} from 'react'
import Checkbox from './orderform/checkboxCom'
import Input from './orderform/inputCom'

// import '../css/orderForm.css'
import '../content/css/test.css'

class OrderForm extends Component{
	handleBtnClick = (url) => {
		this.props.history.push(url);
		console.log('this props MealCard',this.props)
	}
	render(){
		return (
			<div>
				 <form className="formOrder">
				 	<h1>Make Order</h1>
				  	<Input className="zzz" name="surname" value="surname" text="Surname"  />
				  	<Input className="zzz" name="name" value="name" text="Name" />			    
			      	<Input className="zzz" name="pnumber" value="pnumber" text="Phone Number" />					      
			      	<Input className="zzz" name="email" value="email" text="E-mail" />			 	
				   	<div className="yyy">
				   		<Input className="xxx" name="street" value="street" text="Street" />						     
				    	<Input className="xxx" name="index" value="index" text="PostIndex" />
				   	</div>			 						   
				    <div className="yyy">
					    <Input className="xxx" name="building" value="building" text="Building" />						   	
					   	<Input className="xxx" name="apart" value="apart" text="Apartament" />
				    </div>
				    <div className="qqq">	   	 	
				    	<button type="submit">Order</button>
					   	<button onClick={ () => this.handleBtnClick('/menu') } type="button" className="cancelbtn">Cancel</button>	
					   	<label className="registr">
					      <Checkbox text="Registration" />
					    </label>		    
				    </div>
		  		</form>
			</div>
		)
	}
}
export default OrderForm;