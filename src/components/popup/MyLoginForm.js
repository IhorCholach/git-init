import React, { Component } from 'react';
import * as handleBtnClick from '../../constants/index'
import '../../content/css/MyLoginForm.css';
import cross from '../../content/img/cross.png';

class MyLogin extends Component {
	handleBtnClick = (url) => {
		this.props.history.push(url);
		console.log('this props MealCard',this.props)
	}
	render() {
		return (
			<div className="contain">
			<a onClick={ () => this.handleBtnClick('/') } className="close__form"><img src={cross} alt="cross"/></a>
			<div className="title">
				<h1>Login</h1>
				<h3>To Your Account</h3>
			</div>
			
			<form action="#" method="POST" className="log__in">
				<div className="or">
					<div className="line__left">
						<hr/>
					</div>
					<div className="center">
						<span>OR</span>
					</div>
					<div className="line__right">
						<hr/>
					</div>
				</div>
				<label className="login__mail">
					<input type="text" name="name" className="mail" placeholder="Your E-Mail"/>
				</label>
				<label className="login__pass">
					<input type="password" name="pass" className="pass" placeholder="Password"/>
					<a href="#" className="input__link"><span>Forget?</span></a>
				</label>
			</form>
			<div className="bottom">
				<div className="checkbox">
					<input type="checkbox"/>
					<span>Remember me</span>
				</div>
				<div className="span">
					
				</div>
				<div className="sign__up">
					<a href="#">New User ?</a>
				</div>
			</div>
			<div className="button__log__in">
				<button className='button'>Login</button>
			</div>
		</div>
		)
	}
}
export default MyLogin;