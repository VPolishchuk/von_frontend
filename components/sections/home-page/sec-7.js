import React from 'react';
import Img from '../../../public/static/home-page/contact-us/1.png';
import './style.scss';
//////////////////////////////////////////////

export const ContactUsSection = (props) => (
  <div className='section-7 container'>
		<h2 className='gradient'>Contact Us</h2>
		<div className='contact-wrap'>
			<div className='form-wrap'>
				<h3>
					That's what's up!<br/>
					<span>Say hello!</span>
				</h3>
				<form id='send'>
					<input type='name' placeholder='Name' />
					<input type='email' placeholder='Email' />
					<textarea placeholder='Message' rows='30' />
					<button className='gradient'>
						Send
					</button>
				</form>
			</div>
			<div className='social-wrap'>
				<img src={Img} alt='img' className='social-image' />
				<div className='social'>
					<span>Find Us</span>
					<div className='social-box'>
						<a><div className='facebook' /></a>
						<a><div className='instagram' /></a>
						<a><div className='linkedin' /></a>
					</div>
				</div>
			</div>
		</div>
  </div>
);

export default ContactUsSection;