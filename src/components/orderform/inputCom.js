import React, {Component} from 'react'

class Input extends Component{
  render(){
  	return (
	  		<div className={this.props.className}>
	  			<label htmlFor={this.props.name}>
	  				{this.props.text}
	  			</label>
	  			<input type='text' className={this.props.className} name={this.props.value} />
	  		</div>
  		)
  }
}

export default Input;