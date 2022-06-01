import { useState, useEffect } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

import classes from './Pastries.module.css';
import { options } from '../../constants/carouselOptions';
import OwlCarousel from 'react-owl-carousel3';

export function PastriesComponent() {
	const [displayCarousel, setDisplayCarousel] = useState(false);

	useEffect(() => {
		setDisplayCarousel(true);
	}, []);

	return (
		<section className={`${classes.pastriesArea}`}>
			<Container>
				<Row>
					<Col lg={12}>
						<div className={`${classes.mainHeading}`}>
							<h4>Delicious Pastries</h4>
							<h2>Complement your day with our hand crafted pastries</h2>
						</div>
					</Col>
				</Row>
			</Container>
			<Row>
				<Col lg={12}>
					{displayCarousel ? (
						<OwlCarousel className='owl-carousel owl-theme' {...options}>
							<div className={`item ${classes.pastries}`}>
								<Card bsPrefix={`${classes.card} ${classes.pastrie1}`}>
									<Card.Header bsPrefix={`${classes.pastriePrice}`}>
										<h6>$14</h6>
									</Card.Header>
									<Card.Body bsPrefix={`${classes.pastrieInfo}`}>
										<h3 className={`${classes.pastrieName}`}>
											Almond Amoretto
										</h3>
										<p className={`${classes.pastrieDescription}`}>
											Moist, buttery, and so flavorful! Topped with homemade
											Almond and Amaretto Silvered Almonds.
										</p>
									</Card.Body>
								</Card>
							</div>
							<div className={`item ${classes.pastries}`}>
								<Card bsPrefix={`${classes.card} ${classes.pastrie2}`}>
									<Card.Header bsPrefix={`${classes.pastriePrice}`}>
										<h6>$16</h6>
									</Card.Header>
									<Card.Body bsPrefix={`${classes.pastrieInfo}`}>
										<h3 className={`${classes.pastrieName}`}>
											Maple Buttercream
										</h3>
										<p className={`${classes.pastrieDescription}`}>
											A taste of light maple encounters toasted walnuts within a
											creamy, not sweet, buttercream.
										</p>
									</Card.Body>
								</Card>
							</div>
							<div className={`item ${classes.pastries}`}>
								<Card bsPrefix={`${classes.card} ${classes.pastrie3}`}>
									<Card.Header bsPrefix={`${classes.pastriePrice}`}>
										<h6>$16</h6>
									</Card.Header>
									<Card.Body bsPrefix={`${classes.pastrieInfo}`}>
										<h3 className={`${classes.pastrieName}`}>Cinnamon Cream</h3>
										<p className={`${classes.pastrieDescription}`}>
											sprinkle of ground cinnamon is all it takes to turn a bowl
											of plain whipped cream into something special.
										</p>
									</Card.Body>
								</Card>
							</div>
							<div className={`item ${classes.pastries}`}>
								<Card bsPrefix={`${classes.card} ${classes.pastrie4}`}>
									<Card.Header bsPrefix={`${classes.pastriePrice}`}>
										<h6>$15</h6>
									</Card.Header>
									<Card.Body bsPrefix={`${classes.pastrieInfo}`}>
										<h3 className={`${classes.pastrieName}`}>
											Cinnamon Coffee
										</h3>
										<p className={`${classes.pastrieDescription}`}>
											a box of yellow mix and a package of vanilla instant with
											a ribbon of cinnamon pecan coffee streusel.
										</p>
									</Card.Body>
								</Card>
							</div>
						</OwlCarousel>
					) : (
						<h3>Loading Carousel Cards...</h3>
					)}
				</Col>
			</Row>
		</section>
	);
}
