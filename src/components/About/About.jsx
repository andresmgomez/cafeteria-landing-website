import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import classes from './About.module.css';
import siteImages from '../../constants/siteImages';
import previewImage from '../../assets/img/about-bg-preview.jpeg';

export function AboutComponent() {
	return (
		<section className={`${classes.aboutArea}`}>
			<Container>
				<Row>
					<Col sm={12} md={6} lg={6}>
						<div className={`${classes.leftContent}`}>
							<div className={`${classes.headingSection}`}>
								<h4>Our Story</h4>
								<h2>Freshly brew coffee made with organic beans</h2>
							</div>
							<p>
								We make coffee the original way with no additives, and best
								known pastries with a sweet and sour flavor that will make your
								breakfast a joyful experience
							</p>
							<div className={classes.placeImages}>
								<Row>
									<Col sm={12} md={4} lg={4}>
										<img
											className='thumbnail'
											src={siteImages.placeImage2}
											alt='Barista preparing delicious blend coffees'
										/>
									</Col>
									<Col sm={12} md={4} lg={4}>
										<img
											className='thumbnail'
											src={siteImages.placeImage3}
											alt='Young woman enjoying our cream latte'
										/>
									</Col>
									<Col sm={12} md={4} lg={4}>
										<img
											className='thumbnail'
											src={siteImages.placeImage4}
											alt='Person enjoying french vanilla coffee'
										/>
									</Col>
								</Row>
							</div>
						</div>
					</Col>
					<Col sm={12} md={6} lg={6}>
						<div className={`${classes.rightContent}`}>
							<div className={`${classes.previewImage}`}>
								<a
									rel='noreferrer'
									href='https://www.youtube.com/watch?v=npjbbKWLZzg'
									target='_blank'
								>
									<FontAwesomeIcon
										icon={faPlay}
										className={`${classes.fontIcon}`}
									/>
								</a>
								<img
									src={previewImage}
									alt='Listen to why we stand among the best coffee places'
								/>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
