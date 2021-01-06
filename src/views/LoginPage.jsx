/*
* Copyright 2019 Symto Inc.
*/
import React from 'react';

// nodejs library that concatenates classes
import classnames from 'classnames';

import $ from "jquery";

// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	CardImg,
	CardTitle,
	Form,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Container,
	Row,
	Col,
} from 'reactstrap';

// core components
import Navbar from 'components/Navbar/Navbar.jsx';
import Footer from 'components/Footer/Footer.jsx';
import User from 'components/User/User.jsx';
import axios from 'axios';
class RegisterPage extends React.Component {
	state = {
		squares1to6: '',
		squares7and8: '',
		token:'',
	};
	loginUser ()
	{
		const em = $("#emailId").val();
		const pw = $("#passwordId").val();
		const user = new User();
		const auth = user.auth(em, pw);
		alert(auth);
		if (auth)
			window.location.replace("home");
	}
	login ()
	{
		const request = require('sync-request');

		const em = $("#emailId").val();
		const pw = $("#passwordId").val();
		const url = `https://symto.net/reactauth.php?username=${em}&password=${pw}`;
		const res = request('GET', url)

		localStorage.setItem('user', JSON.stringify(res.body));

		alert(res.body);
	}
	loginAsynch()
	{
		var em = $("#emailId").val();
		var pw = $("#passwordId").val();
		axios.get("https://symto.net/symto.net/reactauth.php", 
		{
			params: {
				username:em, 
				password:pw
			}
		})
		.then (request =>
		{
			const data = request.data;

			const token=data.token;

			if (token.length>5)
			{
				localStorage.setItem('user', JSON.stringify(data));
				localStorage.setItem('token', token);
				window.location.replace("home");
			}else{
				alert(data.message);
			}
		});
	}
	componentDidMount() {
		document.documentElement.scrollTop = 0;
		document.scrollingElement.scrollTop = 0;
		this.refs.wrapper.scrollTop = 0;
		document.body.classList.add('register-page');
		document.documentElement.addEventListener(
			'mousemove',
			this.followCursor
		);
	}
	componentWillUnmount() {
		document.body.classList.remove('register-page');
		document.documentElement.removeEventListener(
			'mousemove',
			this.followCursor
		);
	}
	followCursor = (event) => {
		let posX = event.clientX - window.innerWidth / 2;
		let posY = event.clientY - window.innerWidth / 6;
		this.setState({
			squares1to6:
				'perspective(500px) rotateY(' +
				posX * 0.05 +
				'deg) rotateX(' +
				posY * -0.05 +
				'deg)',
			squares7and8:
				'perspective(500px) rotateY(' +
				posX * 0.02 +
				'deg) rotateX(' +
				posY * -0.02 +
				'deg)',
		});
	};
	render() {
		return (
			<>
				<Navbar />
				<div className='wrapper' ref='wrapper'>
					<div className='page-header'>
						<div className='page-header-image' />
						<Container>
							<Row>
								<Col className='mx-auto' lg='5' md='12'>
									<div
										className='square square-7'
										id='square7'
										style={{
											transform: this.state.squares7and8,
										}}
									/>
									<div
										className='square square-8'
										id='square8'
										style={{
											transform: this.state.squares7and8,
										}}
									/>
									<Card className='card-register'>
										<CardHeader>
											<CardImg
												alt='...'
												src={require('assets/img/square-green-1.png')}
											/>
											<CardTitle tag='h4'>
												Login
											</CardTitle>
										</CardHeader>
										<CardBody>
											<Form className='form'>
												<InputGroup
													className={classnames({
														'input-group-focus': this
															.state.emailFocus,
													})}
												>
													<InputGroupAddon addonType='prepend'>
														<InputGroupText>
															<i className='tim-icons icon-email-85' />
														</InputGroupText>
													</InputGroupAddon>
													<Input
														placeholder='Email'
														type='text'
														onFocus={(e) =>
															this.setState({
																emailFocus: true,
															})
														}
														onBlur={(e) =>
															this.setState({
																emailFocus: false,
															})
														}
														id='emailId'
													/>
												</InputGroup>
												<InputGroup
													className={classnames({
														'input-group-focus': this
															.state
															.passwordFocus,
													})}
												>
													<InputGroupAddon addonType='prepend'>
														<InputGroupText>
															<i className='tim-icons icon-lock-circle' />
														</InputGroupText>
													</InputGroupAddon>
													<Input
														placeholder='Password'
														type='text'
														onFocus={(e) =>
															this.setState({
																passwordFocus: true,
															})
														}
														onBlur={(e) =>
															this.setState({
																passwordFocus: false,
															})
														}
														id="passwordId"
													/>
												</InputGroup>
											</Form>
										</CardBody>
										<CardFooter>
											<Button
												className='btn-round'
												color='primary'
												href='#pablo'
												onClick={(e) =>
													//e.preventDefault()
													this.login()
												}
												size='lg'
											>
												Get Started
											</Button>
										</CardFooter>
									</Card>
								</Col>
							</Row>
						</Container>
						<div className='register-bg' />
						<div
							className='square square-1'
							id='square1'
							style={{ transform: this.state.squares1to6 }}
						/>
						<div
							className='square square-2'
							id='square2'
							style={{ transform: this.state.squares1to6 }}
						/>
						<div
							className='square square-3'
							id='square3'
							style={{ transform: this.state.squares1to6 }}
						/>
						<div
							className='square square-4'
							id='square4'
							style={{ transform: this.state.squares1to6 }}
						/>
						<div
							className='square square-5'
							id='square5'
							style={{ transform: this.state.squares1to6 }}
						/>
						<div
							className='square square-6'
							id='square6'
							style={{ transform: this.state.squares1to6 }}
						/>
					</div>
					<Footer />
				</div>
			</>
		);
	}
}

export default RegisterPage;
