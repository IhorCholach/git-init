import React, {Component} from 'react'
import Input from './inputCom'
import './test.css'
class Sign extends Component{
	handleBtnClick = (url) => {
		this.props.history.push(url);
		console.log('this props Signup',this.props)
	}
	render(){
		return(
			<form className="formOrder">
		      <h1>Sign Un</h1>
		      <Input className="zzz" name="uname" value="uname" text="E-mail"  />
		      <Input className="zzz" name="psw" value="psw" text="Password"  />
		      <Input className="zzz" name="cpsw" value="cpsw" text="Confirm your password"  /> 
		     		    
		    <div className="forgot">
		     	<button onClick={ () => this.handleBtnClick('/') } type="submit"><span>Create profile</span></button>
		    </div>
		  </form>
		)
	}
}
export default Sign;