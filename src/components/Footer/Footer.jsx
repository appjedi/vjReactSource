/*!

* Copyright 2019 Symto Inc.

*/
import React from 'react';
import { Link } from 'react-router-dom';
// reactstrap components
import {
	Button,
	NavItem,
	NavLink,
	Nav,
	Container,
	Row,
	Col,
	UncontrolledTooltip,
} from 'reactstrap';

class Footer extends React.Component {
	render() {
		return (
			<footer className='footer'>
				<Container>
					<Row>
						<Col md='3'>
							<h1 className='title'>Symto•</h1>
						</Col>
						<Col md='3'>
							<Nav>
								<NavItem>
									<NavLink to='/home' tag={Link}>
										Home
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to='/register' tag={Link}>
										Register
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to='/login' tag={Link}>
										Login
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to='/profile' tag={Link}>
										Profile
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to='/chat' tag={Link}>
										Chat
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to='/settings' tag={Link}>
										Account Settings
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to='/about-us' tag={Link}>
										About Us
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to='/blog-post' tag={Link}>
										Blog Post
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to='/blog-posts' tag={Link}>
										Blog Posts
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to='/pricing' tag={Link}>
										Pricing
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to='/product-page' tag={Link}>
										Product Page
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to='/404-error' tag={Link}>
										Error 404
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to='/500-error' tag={Link}>
										Error 500
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to='/reset-page' tag={Link}>
										Reset Page
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to='/invoice-page' tag={Link}>
										Invoice Page
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to='/checkout-page' tag={Link}>
										Checkout Page
									</NavLink>
								</NavItem>
							</Nav>
						</Col>
						<Col md='3'>
							<h3 className='title'>Follow us:</h3>
							<div className='btn-wrapper profile'>
								<Button
									className='btn-icon btn-neutral btn-round btn-simple'
									color='default'
									href='https://www.facebook.com/Symto.net/'
									id='tooltip230450801'
									target='_blank'
								>
									<i className='fab fa-facebook-square' />
								</Button>
								<UncontrolledTooltip
									delay={0}
									target='tooltip230450801'
								>
									Like us on Facebook
								</UncontrolledTooltip>
								<Button
									className='btn-icon btn-neutral btn-round btn-simple'
									color='default'
									href='https://www.instagram.com/symto.insta'
									id='tooltip230450802'
									target='_blank'
								>
									<i className='fab fa-instagram' />
								</Button>
								<UncontrolledTooltip
									delay={0}
									target='tooltip230450802'
								>
									Follow us on Instagram
								</UncontrolledTooltip>
								<Button
									className='btn-icon btn-neutral btn-round btn-simple'
									color='default'
									href='https://www.pinterest.com/symto_pins/'
									id='tooltip622135962'
									target='_blank'
								>
									<i className='fab fa-pinterest' />
								</Button>
								<UncontrolledTooltip
									delay={0}
									target='tooltip622135962'
								>
									Follow us on Pinterest
								</UncontrolledTooltip>
							</div>
						</Col>
					</Row>
				</Container>
			</footer>
		);
	}
}

export default Footer;
