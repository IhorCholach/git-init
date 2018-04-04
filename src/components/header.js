import React, { Component } from 'react';
import logo from '../content/img/Logo.png';
/*import { PropTypes } from 'propTypes';*/
// onSubmit={ () => { this.handleAuthBtnClick('/login')} }
class Header extends Component {
/*	static propTypes = {
		history: PropTypes.object.isRequired
	}*/

	handleBtnClick = (url) => {
		this.props.history.push(url);
	}

	render() {
		console.log('HEADER HISTORY', this.props);

		return (
			<header className="static__header">
				<div className="container">
					<div>
						<a href=""><img src={logo} alt=""/></a>
					</div>
					<div>
						<ul className="static__header__nav">
							<li><a onClick={ () => this.handleBtnClick('/') }>home</a></li>
							<li><a onClick={ () => this.handleBtnClick('/menu') }>menu</a></li>
							<li><a onClick={ () => this.handleBtnClick('/videos') }>videos</a></li>
						</ul>
					</div>
					<div className="static__header__inputs">
						<input
							className="login"
							type="button"
							onClick={ () => this.handleBtnClick('/login') }
							value="Log in"
						/>
						<input
							className="sign__up"
							type="button"
							onClick={ () => this.handleBtnClick('/signup') }
							value="Sign Up"
						/>
					</div>
				</div>	
			</header>
		)
	}
}
export default Header;