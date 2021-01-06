/*!

* Copyright 2019 Symto Inc.

*/
import React, { useState } from 'react';
// nodejs library that concatenates classes
import $ from "jquery";
import axios from 'axios';
import classnames from 'classnames';
// react plugin used to create google maps


// reactstrap components
import {
	Badge,
	Button,
	CardBody,
	FormGroup,
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

class ContactUs extends React.Component {
	state = {};
	//const[inputText, setInputText] = useState("");

	componentDidMount() {
		document.documentElement.scrollTop = 0;
		document.scrollingElement.scrollTop = 0;
		this.refs.wrapper.scrollTop = 0;
		document.body.classList.add('contact-page');
	}
	componentWillUnmount() {
		document.body.classList.remove('contact-page');
	}
	submitForm() {

		var bodyFormData = new FormData();
		bodyFormData.append('lastName', $("#lastName").val());
		bodyFormData.append('firstName', $("#firstName").val());
		bodyFormData.append('email', $("#email").val());
		bodyFormData.append('message', $("#message").val());
		const questions = [{ question: "Hello" }, { question: "Good bye" }];
		bodyFormData.append('questions', JSON.stringify(questions));
		axios({
			method: 'post',
			url: 'http://localhost:4000/sendMessage',
			data: bodyFormData,
			headers: { "Access-Control-Allow-Origin": "*" }
		})
			.then(function (response) {
				//handle success
				alert(response);
				console.log(response);
			})
			.catch(function (response) {
				//handle error

			});

	}
	render() {
		return (
			<>
				<Navbar />
				<div className='wrapper' ref='wrapper'>

					<div className='main'>
						<Container fluid>

							<Row className='mt-5 mb-4 pt-5'>
								<Col
									className='ml-auto mr-auto text-center mt-5'
									md='8'
								>
									<Badge color='info'>Leave a message</Badge>
									<h1 className='title'>
										Tell us more about <b>yourself</b>
									</h1>
									<h4 className='desc'>
										Whether you have questions or you would
										just like to say hello, contact us.
									</h4>
								</Col>
							</Row>
							<Row>
								<Col className='mx-auto' md='10'>
									<Form
										className='p-3'
										id='contact-form'

										role='form'
									>
										<CardBody>
											<Row>
												<Col md='6'>
													<label>First name</label>
													<InputGroup
														className={classnames({
															'input-group-focus': this
																.state
																.firstNameFocus,
														})}
													>
														<InputGroupAddon addonType='prepend'>
															<InputGroupText>
																<i className='tim-icons icon-single-02' />
															</InputGroupText>
														</InputGroupAddon>
														<Input
															aria-label='First Name...'
															placeholder='First Name...'
															type='text'
															onFocus={(e) =>
																this.setState({
																	firstNameFocus: true,
																})
															}
															onBlur={(e) =>
																this.setState({
																	firstNameFocus: false,
																})
															}
															id="firstName"
														/>
													</InputGroup>
												</Col>
												<Col md='6'>
													<FormGroup>
														<label>Last name</label>
														<InputGroup
															className={classnames(
																{
																	'input-group-focus': this
																		.state
																		.lastNameFocus,
																}
															)}
														>
															<InputGroupAddon addonType='prepend'>
																<InputGroupText>
																	<i className='tim-icons icon-caps-small' />
																</InputGroupText>
															</InputGroupAddon>
															<Input
																aria-label='Last Name...'
																placeholder='Last Name...'
																type='text'
																onFocus={(e) =>
																	this.setState(
																		{
																			lastNameFocus: true,
																		}
																	)
																}
																onBlur={(e) =>
																	this.setState(
																		{
																			lastNameFocus: false,
																		}
																	)
																}
																id="lastName"
															/>
														</InputGroup>
													</FormGroup>
												</Col>
											</Row>
											<FormGroup>
												<label>Email address</label>
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
														placeholder='Email Here...'
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
														id="email"
													/>
												</InputGroup>
											</FormGroup>
											<FormGroup>
												<label>Your message</label>
												<Input
													id='message'
													name='message'
													rows='6'
													type='textarea'
												/>
											</FormGroup>
											<Row>
												<Col className='ml-auto' md='6'>

													<Button
														className='btn-round pull-right'
														color='primary'

														onClick={(e) =>
															//e.preventDefault()
															this.submitForm()
														}
														size='lg'
													>
														Send Message
											</Button>
												</Col>
											</Row>
										</CardBody>
									</Form>
								</Col>
							</Row>
						</Container>
					</div>


				</div>
			</>
		);
	}
}

export default ContactUs;
