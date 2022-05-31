import { Button, Container, Row, Col } from 'react-bootstrap';
import classes from './Hero.module.css';
import mainBackground from '../../../assets/img/hero-bg-1.jpeg';

export function HeroComponent() {
	return (
		<section className={`${classes.heroArea}`}>
			<Container fluid>
				<Row>
					<Col lg={4}>
						<div className={`${classes.leftHero}`}>
							<div className={`${classes.headingHero}`}>
								<h1>Clichee Cafe</h1>
								<h3>A blend of flavors and scents</h3>
								<Button bsPrefix={`btn ${classes.heroBtn}`}>
									<a href='#contact'>Make reservation</a>
								</Button>
							</div>
						</div>
					</Col>
					<Col lg={8}>
						<div className={`${classes.rightHero}`}>
							<div className='item'>
								<div className={`${classes.fillPicture}`}>
									<img
										src={mainBackground}
										alt='Local people discovering our exclusive coffee place'
									/>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
