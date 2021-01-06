/*!

* Copyright 2019 Symto Inc.

*/
import React from 'react';
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
import Navbar from '../components/Navbar/Navbar.jsx';

class ContactUs extends React.Component {
	state = {};
	//[questions, setQuestion] = useState([]);
	questions = [];
	componentDidMount() {
		document.documentElement.scrollTop = 0;
		document.scrollingElement.scrollTop = 0;
		this.refs.wrapper.scrollTop = 0;
		document.body.classList.add('contact-page');
		$("#url").val("https://morning-fortress-91060.herokuapp.com/sendMessage");
		$("#url").hide();
		//alert(document.cookie);
	}
	componentWillUnmount() {
		document.body.classList.remove('contact-page');
	}
	addQuestion() {
		this.questions.push($("#question").val());
		$("#divQuestions").html($("#divQuestions").html() + "<li>"+$("#question").val() + "</li>");
	}
	submitForm()
	{
		var bodyFormData = new FormData();

		bodyFormData.append('email', $("#email").val());
		bodyFormData.append('questions', JSON.stringify(this.questions));
		
		var url = $("#url").val();
		if (url.length < 10) {
			alert("Message Sent");
			return;
		}
		//url = 'http://localhost:4000/sendMessage'
		//url = "https://morning-fortress-91060.herokuapp.com/sendMessage";

		axios({
			method: 'post',
			url: url,
			data: bodyFormData,
			headers: { "Access-Control-Allow-Origin": "*" }
		})
		.then(function (response) {
			//handle success
			alert(response.data.email);
			
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
										<b>What is your Query?</b>
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
											<Input
												type='text'
												size='50'
												id="url"
											//	value="https://morning-fortress-91060.herokuapp.com/sendMessage"
											/>
											
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
														size='50'
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
											<Row>
												<hr/>
											</Row>
											<FormGroup>
												<Row>
													<label>Your query?</label>
												</Row>
											<Input
												id='question'
													name='question'
													rows='4'
													cols="80"
												type='textarea'
												/>
											
											</FormGroup>
											<Row>
												<Button
													className='btn-round pull-right'
													color='primary'

													onClick={(e) =>
														//e.preventDefault()
														this.addQuestion()
													}
													size='lg'
												>
													Add Query
												</Button> &nbsp;
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
											</Row>
											<Col className='ml-auto' md='6'>
												<ol>
													<div id='divQuestions'></div>
												</ol>
											</Col>
											
							
										</CardBody>
									</Form>
								</Col>
							</Row>
						</Container>
					</div>
					<div id='divQuestions'></div>
					
				</div>
			</>
		);
	}
}

export default ContactUs;
