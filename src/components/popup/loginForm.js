import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Input from '../orderform/inputCom'
import Checkbox from '../orderform/checkboxCom'
import '../../content/css/test.css'
class Login extends Component{
	render(){
		return(
			<form className="formOrder">
		      <h1>Log In</h1>
		      <Input className="zzz" name="uname" value="uname" text="Username"  />
		      <Input className="zzz" name="psw" value="psw" text="Password"  />		     		    
		    <div className="forgot">
		     	<Link to='/'><button type="submit"><span>Log In</span></button></Link>
		    	<span ><a href="#">Forgot password?</a></span>
		    	<label className="registr">
			      <Checkbox text="Remember me" />
			    </label>	
		    </div>
		  </form>
		)
	}
}
export default Login;