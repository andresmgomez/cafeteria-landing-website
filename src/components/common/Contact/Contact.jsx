import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import classes from './Contact.module.css';

export function ContactComponent() {
	return (
		<section className={`${classes.contactArea}`}>
			<Container>
				<Row>
					<Col lg={6} className='align-self-center'>
						<div className={`${classes.contactSection}`}>
							<h4>Visit Our Place</h4>
							<h2>Come and visit us with your friends and family.</h2>
							<p>
								Sit in our lounge chairs and enjoy drinking one of our exclusive
								coffees with pastries. While having a good conversation with
								other cafe connoseurs.
							</p>
						</div>
						<Row>
							<Col lg={6}>
								<div className={`${classes.placeLocation}`}>
									<h4>We Are Located</h4>
									<span>
										<FontAwesomeIcon
											icon={faMap}
											className={`${classes.fontContacts}`}
										/>
										<a href='#location'>13475 High End Avenue, Miami, FL</a>
									</span>
								</div>
							</Col>
							<Col lg={6}>
								<div className={`${classes.placePhone}`}>
									<h4>How to Reach Us</h4>
									<span>
										<FontAwesomeIcon
											icon={faPhone}
											className={`${classes.fontContacts}`}
										/>
										<a href='#phone'>(786) 458 9122</a>
									</span>
								</div>
							</Col>
						</Row>
					</Col>
					<Col lg={6}>
						<div className={`${classes.contactForm}`}>
							<form>
								<Row>
									<Col lg={12}>
										<h4>Reservation Table</h4>
									</Col>
									<fieldset>
										<Col sm={12} col={12}>
											<Form.Group className='mb-3'>
												<Form.Control
													name='customerName'
													type='text'
													placeholder='Your Name'
												/>
											</Form.Group>
										</Col>
										<Col sm={12} col={12}>
											<Form.Group className='mb-3'>
												<Form.Control
													name='customerEmail'
													type='email'
													placeholder='Your Email'
												/>
											</Form.Group>
										</Col>
									</fieldset>
									<fieldset>
										<Col sm={12} lg={12}>
											<Row>
												<Col sm={12} lg={6}>
													<Form.Select aria-label='Number of Guests'>
														<option value='number-guests'>
															Number Of Guests
														</option>
														<option name='1' value='1'>
															1
														</option>
														<option name='2' value='2'>
															2
														</option>
														<option name='3' value='3'>
															3
														</option>
														<option name='4' value='4'>
															4
														</option>
														<option name='5' value='5'>
															5
														</option>
														<option name='6' value='6'>
															6
														</option>
														<option name='7' value='7'>
															7
														</option>
														<option name='8' value='8'>
															8
														</option>
														<option name='9' value='9'>
															9
														</option>
														<option name='10' value='10'>
															10
														</option>
													</Form.Select>
												</Col>
												<Col sm={12} lg={6}>
													<Form.Control
														name='reservationDate'
														type='date'
														placeholder='dd/mm/yyy'
													/>
												</Col>
											</Row>
										</Col>
									</fieldset>
									<Col sm={12} lg={12}>
										<Form.Select aria-label='Reservation Time'>
											<option value='time'>Time of Reservation</option>
											<option name='Breakfast' value='Breakfast'>
												Breakfast
											</option>
											<option name='Lunch' value='Lunch'>
												Lunch
											</option>
											<option name='Dinner' value='Dinner'>
												Dinner
											</option>
										</Form.Select>
									</Col>
									<Col sm={12} lg={12}>
										<Form.Control
											as='textarea'
											placeholder='Any message you would like us to know...'
										/>
									</Col>
									<Col sm={12} lg={12}>
										<Button
											as='input'
											type='submit'
											value='Make Reservation'
											bsPrefix={`${classes.contactButton}`}
										/>
									</Col>
								</Row>
							</form>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
