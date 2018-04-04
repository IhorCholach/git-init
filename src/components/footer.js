import React, { Component } from 'react';
import heart from '../content/img/heart.png'
import google from '../content/img/google__footer.png'
import facebook from '../content/img/facebook__footer.png'
import twetter from '../content/img/twetter__footer.png'
import in__footer from '../content/img/in__footer.png'
import instagram from '../content/img/instagram__footer.png'

class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<div className="footer__items first">
					<h3>cook at home</h3>
					<div>
						<p>We are passionate about cooking and sharing what we learn to help everyone cook with confidence. We test cookware and supermarket ingredients to find the best quality.</p>
					</div>
					<div className="footer__items__hertlink">
						<p>create with <span className="hertlink"><img src={heart} alt=""/></span> by: <a href="https://lasoft.org/">LaSoft Team</a></p>
					</div>	
				</div>
				<div className="footer__items last">
					<h3>social media</h3>
					<p>We are passionate about cooking and sharing what we learn to help everyone.</p>
					<ul className="footer__items__social">
						<li><a href="https://plus.google.com/communities/100217122763399040317?np=ANwUjapNTZjJHe4h2ZuZHNzIzbkNja492MsZHNix2Y6NTM6xyaw82d0h2YxgXcyJHbolmbnNGNwQXa1Q3YuZWdhJma2dGczEje"><img src={google} alt="google+ icon"/></a></li>
						<li><a href="https://www.facebook.com/Lasoft-1724746974471108/"><img src={facebook} alt="facebook icon"/></a></li>
						<li><a href=""><img src={twetter} alt="twetter icon"/></a></li>
						<li><a href=""><img src={in__footer} alt="in icon"/></a></li>
						<li><a href=""><img src={instagram} alt="instagram icon"/></a></li>
					</ul>
				</div>
			</div>
		)
	}
}
export default Footer;