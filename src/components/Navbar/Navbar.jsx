/*!

* Copyright 2019 Symto Inc.

*/
import React from 'react';
import { Link } from 'react-router-dom';
// reactstrap components
import {
	Collapse,
	NavbarBrand,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Container,

} from 'reactstrap';

class PagesNavbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapseOpen: false,
			color: 'navbar-transparent',
		};
	}
	componentDidMount() {
		window.addEventListener('scroll', this.changeColor);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.changeColor);
	}
	changeColor = () => {
		if (
			document.documentElement.scrollTop > 99 ||
			document.body.scrollTop > 99
		) {
			this.setState({
				color: 'bg-white',
			});
		} else if (
			document.documentElement.scrollTop < 100 ||
			document.body.scrollTop < 100
		) {
			this.setState({
				color: 'navbar-transparent',
			});
		}
	};
	toggleCollapse = () => {
		document.documentElement.classList.toggle('nav-open');
		this.setState({
			collapseOpen: !this.state.collapseOpen,
		});
	};
	onCollapseExiting = () => {
		this.setState({
			collapseOut: 'collapsing-out',
		});
	};
	onCollapseExited = () => {
		this.setState({
			collapseOut: '',
		});
	};
	render() {
		return (
			<Navbar
				className={'fixed-top ' + this.state.color}
				color-on-scroll='100'
				expand='lg'
			>
				<Container>
					<div className='navbar-translate'>
						<NavbarBrand
							data-placement='bottom'
							to='/home'
							rel='noopener noreferrer'
							title='About Me!'
							tag={Link}
						>
							<span>Home </span>
							
						</NavbarBrand>
				
					</div>
					<div>
					<Nav navbar>
						<NavItem>
							<NavLink to='/about-me' tag={Link}>
								About Me
									</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to='/contact-me' tag={Link}>
								Contact Me
									</NavLink>
						</NavItem>

						</Nav>
						</div>
					<Collapse
						className={
							'justify-content-end ' + this.state.collapseOut
						}
						navbar
						isOpen={this.state.collapseOpen}
						onExiting={this.onCollapseExiting}
						onExited={this.onCollapseExited}
					>
				
						
					</Collapse>
				</Container>
			</Navbar>
		);
	}
}

export default PagesNavbar;
