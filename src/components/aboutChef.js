import React, { Component } from 'react';
import google from '../content/img/google__footer.png'
import facebook from '../content/img/facebook__footer.png'
import twetter from '../content/img/twetter__footer.png'
import in__footer from '../content/img/in__footer.png'
import instagram from '../content/img/instagram__footer.png'
import chefPhoto from '../content/img/Chefbg.png'
import '../content/css/aboutChef.css';

class Chef extends Component {
	render() {
		return (
			<section className="about__chef  globall__contaiher">
				<div className="about__chef__title">
					<h2>about chef</h2>
					<h4>creative seafood chef</h4>
				</div>
				<div className="about__chef__describe">
					<div className="about__chef__photo">
						<img src={chefPhoto} alt=""/>
					</div>
					
					<div className="about__chef__describe__text">
						<h2>marcos smith</h2>
						<ul className="about__chef__describe__text__social">
					  		<li><a href="https://plus.google.com/communities/100217122763399040317?np=ANwUjapNTZjJHe4h2ZuZHNzIzbkNja492MsZHNix2Y6NTM6xyaw82d0h2YxgXcyJHbolmbnNGNwQXa1Q3YuZWdhJma2dGczEje"><img src={google} alt="google+ icon"/></a></li>
					 	 	<li><a href="https://www.facebook.com/Lasoft-1724746974471108/"><img src={facebook} alt="facebook icon"/></a></li>
					  		<li><a href="#"><img src={twetter} alt="twetter icon"/></a></li>
					  		<li><a href="#"><img src={in__footer} alt="in icon"/></a></li>
					  		<li><a href="#"><img src={instagram} alt="instagram icon"/></a></li>
					  	</ul> 
						<div className="paragraph">
							<p>
							It’s important to look at tradi tion and culture for Cooking Tips & Techniques inspiation Look to the pasmov region of the cuisineown traditions.It’s important to look at tradi tion and culture for Cooking Tips & Techniques inspiation Look to the pasmov region of the cuisineown traditions.It’s important to look at tradi tion and culture for Cooking Tips & Techniques inspiation Look to the pasmov region of the cuisineown traditions.It’s important to look at tradi tion and culture for Cooking Tips & Techniques inspiation Look to the pasmov region of the cuisineown traditions.
							</p>
						</div>
						<div className="about__chef__describe__text__buttons">
							<input className="left" type="button" value="follow"/>
							<input className="right" type="button" value="send message"/>
						</div>
					</div>
				</div>
		</section>
		)
	}
}
export default Chef;