/*!

* Copyright 2019 Symto Inc.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// react plugin used to create google maps


// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

class ContactUs extends React.Component {
    state = {};
    submitForm() {
        alert("submitForm");
    }
  render() {
    return (
      <>
        <div className="cd-section" id="contactus">
          {/* ********* CONTACT US 1 ********* */}
          <div
            
          >
            <Container>
              <Row>
                <Col md="5">
                  <h2 className="title">Contact Me</h2>
                  <h4 className="description">
                 
                  </h4>
            
           
                </Col>
                <Col className="ml-auto mr-auto" md="5">
                  <Card className="card-contact card-raised">
                    <Form id="contact-form" role="form">
                      <CardHeader className="text-center">
                        <CardTitle tag="h4">Contact Us</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <Row>
                          <Col md="6">
                            <label>First name</label>
                            <InputGroup
                              className={classnames({
                                "input-group-focus": this.state
                                  .firstNameContact1Focus
                              })}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="tim-icons icon-single-02" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                aria-label="First Name..."
                                placeholder="First Name..."
                                type="text"
                                onFocus={e =>
                                  this.setState({
                                    firstNameContact1Focus: true
                                  })
                                }
                                onBlur={e =>
                                  this.setState({
                                    firstNameContact1Focus: false
                                  })
                                }
                              />
                            </InputGroup>
                          </Col>
                          <Col className="pl-2" md="6">
                            <FormGroup>
                              <label>Last name</label>
                              <InputGroup
                                className={classnames({
                                  "input-group-focus": this.state
                                    .lastNameContact1Focus
                                })}
                              >
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="tim-icons icon-caps-small" />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  aria-label="Last Name..."
                                  placeholder="Last Name..."
                                  type="text"
                                  onFocus={e =>
                                    this.setState({
                                      lastNameContact1Focus: true
                                    })
                                  }
                                  onBlur={e =>
                                    this.setState({
                                      lastNameContact1Focus: false
                                    })
                                  }
                                />
                              </InputGroup>
                            </FormGroup>
                          </Col>
                        </Row>
                        <FormGroup>
                          <label>Email address</label>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.emailContact1Focus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-email-85" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Email Here..."
                              type="text"
                              onFocus={e =>
                                this.setState({ emailContact1Focus: true })
                              }
                              onBlur={e =>
                                this.setState({ emailContact1Focus: false })
                              }
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <label>Your message</label>
                          <Input
                            id="message"
                            name="message"
                            rows="6"
                            type="textarea"
                          />
                        </FormGroup>
                        <Row>
                        
                          <Col md="6">
                                                    <Button
                                                        className='btn-round'
                                                        color='info'
                                                        href='#pablo'
                                                        onClick={(e) =>
                                                            //e.preventDefault()
                                                            this.submitForm()
                                                        }
                                                        size='lg'
                                                    >
                                                        Contact Me
											</Button>
                          </Col>
                        </Row>
                      </CardBody>
                    </Form>
                  </Card>
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
