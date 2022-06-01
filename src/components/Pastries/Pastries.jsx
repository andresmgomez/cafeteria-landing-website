import { Row, Col, Container } from 'react-bootstrap';
import { CardPastries } from './CardPastries';

import classes from './Pastries.module.css';

export function PastriesComponent() {
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
					<CardPastries />
				</Col>
			</Row>
		</section>
	);
}
