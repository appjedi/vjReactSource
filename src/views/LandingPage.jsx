/*!

* Copyright 2019 Symto Inc.

*/
import React from 'react';

// reactstrap components
import { Button, Container, Row, Col } from 'reactstrap';

// core components
import Navbar from 'components/Navbar/Navbar.jsx';
import Footer from 'components/Footer/Footer.jsx';

class LandingPage extends React.Component {
	componentDidMount() {
		document.body.classList.toggle('home');
		const user = {token: "12345"};//JSON.parse(localStorage.getItem('user'));
		const token = user.token;
		alert(token);
		if (token.length<5)
		{
			alert("Ivalid Token");
			window.location.replace("login");
		}

	}
	componentWillUnmount() {
		document.body.classList.toggle('home');
	}
	render() {
		return (
			<>
				<Navbar />
				<div className='wrapper'>
					<div className='page-header'>
						<img
							alt='...'
							className='path'
							src={require('assets/img/blob.png')}
						/>
						<img
							alt='...'
							className='path2'
							src={require('assets/img/path2.png')}
						/>
						<img
							alt='...'
							className='shapes triangle'
							src={require('assets/img/triunghiuri.png')}
						/>
						<img
							alt='...'
							className='shapes wave'
							src={require('assets/img/waves.png')}
						/>
						<img
							alt='...'
							className='shapes squares'
							src={require('assets/img/patrat.png')}
						/>
						<img
							alt='...'
							className='shapes circle'
							src={require('assets/img/cercuri.png')}
						/>
						<div className='content-center'>
							<Row className='row-grid justify-content-between align-items-center text-left'>
								<Col lg='6' md='6'>
									<h1 className='text-white'>
										A Social Network That's Good for You?{' '}
										<br />
									</h1>
									<p className='text-white mb-3'>
										Symto makes managing your health
										effortless, and healthy choices more
										affordable. For everyone.
									</p>
									<div className='btn-wrapper mb-3'>
										<p className='category text-success d-inline'>
											Learn more
										</p>
										<Button
											className='btn-link'
											color='success'
											href='#pablo'
											onClick={(e) => e.preventDefault()}
											size='sm'
										>
											<i className='tim-icons icon-minimal-right' />
										</Button>
									</div>
									<div className='btn-wrapper'>
										<div className='button-container'>
											<Button
												className='btn-icon btn-simple btn-round btn-neutral'
												color='default'
												href='#pablo'
												onClick={(e) =>
													e.preventDefault()
												}
											>
												<i className='fab fa-facebook' />
											</Button>
											<Button
												className='btn-icon btn-simple btn-round btn-neutral'
												color='default'
												href='#pablo'
												onClick={(e) =>
													e.preventDefault()
												}
											>
												<i className='fab fa-instagram' />
											</Button>
											<Button
												className='btn-icon btn-simple btn-round btn-neutral'
												color='default'
												href='#pablo'
												onClick={(e) =>
													e.preventDefault()
												}
											>
												<i className='fab fa-pinterest' />
											</Button>
										</div>
									</div>
								</Col>
								<Col lg='4' md='5'>
									<img
										alt='...'
										className='img-fluid'
										src={require('assets/img/etherum.png')}
									/>
								</Col>
							</Row>
						</div>
					</div>
					<section className='section section-lg'>
						<section className='section'>
							<img
								alt='...'
								className='path'
								src={require('assets/img/path4.png')}
							/>
							<Container>
								<Row className='row-grid justify-content-between'>
									<Col md='6'>
										<div className='pl-md-5'>
											<h1>
												We Empower <br />
												Whatever We Pay Attention To
											</h1>
											<p>
												Social networks are the most
												powerful attention-focusing
												apparatus that have ever
												existed.
											</p>
											<br />
											<p>
												Symto is THE health and wellness
												social network.
											</p>
											<br />
											<a
												className='font-weight-bold text-info mt-5'
												href='#pablo'
												onClick={(e) =>
													e.preventDefault()
												}
											>
												Show all{' '}
												<i className='tim-icons icon-minimal-right text-info' />
											</a>
										</div>
									</Col>
								</Row>
							</Container>
						</section>
					</section>
					<section className='section section-lg'>
						<img
							alt='...'
							className='path'
							src={require('assets/img/path4.png')}
						/>
						<img
							alt='...'
							className='path2'
							src={require('assets/img/path5.png')}
						/>
						<img
							alt='...'
							className='path3'
							src={require('assets/img/path2.png')}
						/>
						<Container>
							<Row className='justify-content-center'>
								<Col lg='12'>
									<h1 className='text-center'>
										Your best benefit
									</h1>
									<Row className='row-grid justify-content-center'>
										<Col lg='3'>
											<div className='info'>
												<div className='icon icon-primary'>
													<i className='tim-icons icon-money-coins' />
												</div>
												<h4 className='info-title'>
													Symto works for you
												</h4>
												<hr className='line-primary' />
												<p>
													Our advertisers purchase
													"Symtokents" with which
													their ads pay our users for
													their engagement.
												</p>
											</div>
										</Col>
										<Col lg='3'>
											<div className='info'>
												<div className='icon icon-warning'>
													<i className='tim-icons icon-chart-pie-36' />
												</div>
												<h4 className='info-title'>
													Participating Businesses
												</h4>
												<hr className='line-warning' />
												<p>
													From gyms and spas, to
													resturants and health food
													stores. Symtokens are
													redeemable at our
													participating health and
													wellness businesses.
												</p>
											</div>
										</Col>
										<Col lg='3'>
											<div className='info'>
												<div className='icon icon-success'>
													<i className='tim-icons icon-single-02' />
												</div>
												<h4 className='info-title'>
													Health Management
												</h4>
												<hr className='line-success' />
												<p>
													Improving on familiar social
													networking functionality,
													Symto us designed to make
													paying attention to your
													health fun and effortless,
													while connecting our users
													to communities of peiple
													that share their health
													interests and challenges.
												</p>
											</div>
										</Col>
									</Row>
								</Col>
							</Row>
						</Container>
					</section>
					{/* <section className="section section-lg section-safe">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path5.png")}
            />
            <Container>
              <Row className="row-grid justify-content-between">
                <Col md="5">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/chester-wade.jpg")}
                  />
                  <Card className="card-stats bg-danger">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">100%</CardTitle>
                          <p className="card-category text-white">Safe</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="card-stats bg-info">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">573 K</CardTitle>
                          <p className="card-category text-white">
                            Satisfied customers
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="card-stats bg-default">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">10 425</CardTitle>
                          <p className="card-category text-white">Business</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="px-md-5">
                    <hr className="line-success" />
                    <h3>Awesome features</h3>
                    <p>
                      The design system comes with three pre-built pages to help
                      you get started faster. You can change the text and images
                      and you're good to go.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-vector" />
                          </div>
                          <div className="ml-3">
                            <h6>Carefully crafted components</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-tap-02" />
                          </div>
                          <div className="ml-3">
                            <h6>Amazing page examples</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-single-02" />
                          </div>
                          <div className="ml-3">
                            <h6>Super friendly support team</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section> */}
					{/* <section className="section section-lg section-coins">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path3.png")}
            />
            <Container>
              <Row>
                <Col md="4">
                  <hr className="line-info" />
                  <h1>
                    Choose the coin{" "}
                    <span className="text-info">that fits your needs</span>
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/bitcoin.png")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Light Coin</h4>
                          <span>Plan</span>
                          <hr className="line-primary" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>50 messages</ListGroupItem>
                          <ListGroupItem>100 emails</ListGroupItem>
                          <ListGroupItem>24/7 Support</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="primary">
                        Get plan
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/etherum.png")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Dark Coin</h4>
                          <span>Plan</span>
                          <hr className="line-success" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>150 messages</ListGroupItem>
                          <ListGroupItem>1000 emails</ListGroupItem>
                          <ListGroupItem>24/7 Support</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="success">
                        Get plan
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/ripp.png")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Bright Coin</h4>
                          <span>Plan</span>
                          <hr className="line-info" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>350 messages</ListGroupItem>
                          <ListGroupItem>10K emails</ListGroupItem>
                          <ListGroupItem>24/7 Support</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="info">
                        Get plan
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section> */}
					<Footer />
				</div>
			</>
		);
	}
}

export default LandingPage;
