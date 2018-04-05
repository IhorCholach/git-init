import React, { Component } from 'react';

const arr=[
	{
		className:"meals__meat united",
		name:"meat"
	},
	{
		className:"meals__fish united",
		name:"fish"
	},
	{
		className:"meals__soup united",
		name:"soup"
	},
	{
		className:"meals__salat united",
		name:"salat"
	}
]

class Main extends Component {
	handleBtnClick = (url) => {
		this.props.history.push(url);
	}
	categoryCard = () =>{
		return(
			arr.map((item,i)=>{
				return(
					<div key={i} className={item.className}>
						<h4>{item.name}</h4>
							<input 
								type="button" 
								value="order"
								onClick={ () => this.handleBtnClick('/menu')}
							/>
					</div>
		  	)}
			)
		)}
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
						{this.categoryCard()}
					</div>
				</div>	
			</section>
		)
	}
}
export default Main;