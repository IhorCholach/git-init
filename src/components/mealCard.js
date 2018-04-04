import React, {Component} from 'react'
import './mealCard.css'

class CardMeal extends Component{
	handleBtnClick = (url) => {
		this.props.history.push(url);
		console.log('this props MealCard',this.props)
	}
	render (){

		return(
			<div className='container__mealCard'>
				<div id="mealCard">
					<div id="imgMeal">					
					</div>
					<div id="mealInfo">
						<div className="mealHeader">
							<h2>Honey Garlic Salmon</h2>
							<h4>This salmon gets cooked right in the sauce.</h4>
						</div>
						<div className="mealData">
							<div id="price">
								<span>20$</span>
							</div>
							<div id="btn">
								<button onClick={ () => this.handleBtnClick('/order') }><span>Order</span></button>
							</div>
						</div>
					</div>
				</div>
				<div id="mealCard">
					<div id="imgMeal">					
					</div>
					<div id="mealInfo">
						<div className="mealHeader">
							<h2>Honey Garlic Salmon</h2>
							<h4>This salmon gets cooked right in the sauce.</h4>
						</div>
						<div className="mealData">
							<div id="price">
								<span>10$</span>
							</div>
							<div id="btn">
								<button onClick={ () => this.handleBtnClick('/order') }><span>Order</span></button>
							</div>
						</div>
					</div>
				</div>
				<div id="mealCard">
					<div id="imgMeal">					
					</div>
					<div id="mealInfo">
						<div className="mealHeader">
							<h2>Honey Garlic Salmon</h2>
							<h4>This salmon gets cooked right in the sauce.</h4>
						</div>
						<div className="mealData">
							<div id="price">
								<span>10$</span>
							</div>
							<div id="btn">
								<button onClick={ () => this.handleBtnClick('/order') }><span>Order</span></button>
							</div>
						</div>
					</div>
				</div>
				<div id="mealCard">
					<div id="imgMeal">					
					</div>
					<div id="mealInfo">
						<div className="mealHeader">
							<h2>Honey Garlic Salmon</h2>
							<h4>This salmon gets cooked right in the sauce.</h4>
						</div>
						<div className="mealData">
							<div id="price">
								<span>10$</span>
							</div>
							<div id="btn">
								<button onClick={ () => this.handleBtnClick('/order') }><span>Order</span></button>
							</div>
						</div>
					</div>
				</div>
				<div id="mealCard">
					<div id="imgMeal">					
					</div>
					<div id="mealInfo">
						<div className="mealHeader">
							<h2>Honey Garlic Salmon</h2>
							<h4>This salmon gets cooked right in the sauce.</h4>
						</div>
						<div className="mealData">
							<div id="price">
								<span>10$</span>
							</div>
							<div id="btn">
								<button onClick={ () => this.handleBtnClick('/order') }><span>Order</span></button>
							</div>
						</div>
					</div>
				</div>
				<div id="mealCard">
					<div id="imgMeal">					
					</div>
					<div id="mealInfo">
						<div className="mealHeader">
							<h2>Honey Garlic Salmon</h2>
							<h4>This salmon gets cooked right in the sauce.</h4>
						</div>
						<div className="mealData">
							<div id="price">
								<span>10$</span>
							</div>
							<div id="btn">
								<button onClick={ () => this.handleBtnClick('/order') }><span>Order</span></button>
							</div>
						</div>
					</div>
				</div>
				<div id="mealCard">
					<div id="imgMeal">					
					</div>
					<div id="mealInfo">
						<div className="mealHeader">
							<h2>Honey Garlic Salmon</h2>
							<h4>This salmon gets cooked right in the sauce.</h4>
						</div>
						<div className="mealData">
							<div id="price">
								<span>10$</span>
							</div>
							<div id="btn">
								<button onClick={ () => this.handleBtnClick('/order') }><span>Order</span></button>
							</div>
						</div>
					</div>
				</div>

			</div>
		)
	}
}
export default CardMeal;