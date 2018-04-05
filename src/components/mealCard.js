import React, {Component} from 'react'
import '../content/css/mealCard.css'

const arr=[
	{
		id:1,
		title:'title1',
		description:'Lore totam nam impedit laboriosam expedita, recusandae minima est laborum.',
		price: 30
	},
	{	
		id:2,
		title:'title2',
		description:'Lorem ipsum dolor sit amet, consectetur adipisi mollitia hic qui omnis incidunt perferendis laborum maiores quibusdam corrupti.',
		price: 20
	},
	{	
		id:3,
		title:'title3',
		description:'Lorem incidunt illum, et quis, perspiciatis officiis hic quae dolore dolorum unde pariatur ipsum architecto id ratione, fugit, repudiandae dolor!',
		price: 25
	},
	{	
		id:4,
		title:'title4',
		description:'Lorem ipsum dolor sit amet, consectetur  illum, et quis, perspiciatis officiis hic quae dolore dolorum unde pariatur ipsum architecto id ratione, fugit, repudiandae dolor!',
		price: 27
	},
	{	
		id:5,
		title:'title5',
		description:' suscipit similique incidunt illum, et quis, perspiciatis officiis hic quae dolore dolorum unde pariatur ipsum architecto id ratione, fugit, repudiandae dolor!',
		price: 15
	},
	{	
		id:6,
		title:'title6',
		description:'Lorem ipsum dolor sit amet,  perspiciatis officiis hic quae dolore dolorum unde pariatur ipsum architecto id ratione, fugit, repudiandae dolor!',
		price: 22
	},
	{	
		id:7,
		title:'title7',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. fugit, repudiandae dolor!',
		price: 29
	}
]

class CardMeal extends Component{

	handleBtnClick = (url) => {
		this.props.history.push(url);
		console.log('this props MealCard',this.props)
	}


mealCard = () => { 
		return(
			arr.map( (item) =>{
				return(
					<div key={item.id} id="mealCard">
						<div id="imgMeal">					
						</div>
						<div id="mealInfo">
							<div   className="mealHeader">
								<h2>{item.title}</h2>
								<h4>{item.description}</h4>
							</div>
							<div className="mealData">
								<div id="price">
									<span>{item.price}$</span>
								</div>
								<div id="btn">
									<button onClick={ () => this.handleBtnClick('/order') }><span>Order</span></button>
								</div>
							</div>
						</div>
				</div>
			)
		})
	)}

	render (){

		return(
			<div className='container__mealCard'>
				{
					this.mealCard()
				}
			</div>
		)
	}
}
export default CardMeal;