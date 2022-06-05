import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

import { options } from '../../constants/carouselOptions';
import classes from './Pastries.module.css';
import OwlCarousel from 'react-owl-carousel3';

export function CardPastries() {
	const [displayCarousel, setDisplayCarousel] = useState(false);

	useEffect(() => {
		setDisplayCarousel(true);
	}, []);

	return (
		<>
			{displayCarousel ? (
				<OwlCarousel className='owl-carousel owl-theme' {...options}>
					<div className={`item ${classes.pastries}`}>
						<Card bsPrefix={`${classes.card} ${classes.pastrie1}`}>
							<Card.Header bsPrefix={`${classes.pastriePrice}`}>
								<h6>$14</h6>
							</Card.Header>
							<Card.Body bsPrefix={`${classes.pastrieInfo}`}>
								<h3 className={`${classes.pastrieName}`}>Almond Amoretto</h3>
								<p className={`${classes.pastrieDescription}`}>
									Moist, buttery, and so flavorful! Topped with homemade Almond
									and Amaretto Silvered Almonds.
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
								<h3 className={`${classes.pastrieName}`}>Maple Buttercream</h3>
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
									Sprinkle of ground cinnamon is all it takes to turn a bowl of
									plain whipped cream into something special.
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
								<h3 className={`${classes.pastrieName}`}>Cinnamon Coffee</h3>
								<p className={`${classes.pastrieDescription}`}>
									A box of yellow mix and a package of vanilla instant with a
									ribbon of cinnamon pecan coffee streusel.
								</p>
							</Card.Body>
						</Card>
					</div>
				</OwlCarousel>
			) : (
				<h3>Loading Carousel Cards...</h3>
			)}
		</>
	);
}
