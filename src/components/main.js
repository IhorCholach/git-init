import React, { Component } from 'react';

class Main extends Component {
	handleBtnClick = (url) => {
		this.props.history.push(url);
	}
	render() {
		return (
			<section className="chef__meals">
				<div className="container">
					<div className="chef__meals__chef">
						<input 
							type="button" 
							value="about me"
							onClick={ () => this.handleBtnClick('/aboutchef')} 
							/>
					</div>
					<div className="chef__meals__meals">
						<div className="meals__meat united">
							<h4>meat</h4>
							<input 
								type="button" 
								value="order"
								onClick={ () => this.handleBtnClick('/menu')}
								/>
						</div>
						<div className="meals__fish united">
							<h4>fish</h4>
							<input 
								type="button" 
								value="order"
								onClick={ () => this.handleBtnClick('/menu')}
								/>
						</div>
						<div className="meals__soup united">
							<h4>soup</h4>
							<input 
								type="button" 
								value="order"
								onClick={ () => this.handleBtnClick('/menu')}
								/>
						</div>
						<div className="meals__salat united">
							<h4>salat</h4>
							<input 
								type="button" 
								value="order"
								onClick={ () => this.handleBtnClick('/menu')}
								/>
						</div>
					</div>
				</div>	
			</section>
		)
	}
}
export default Main;