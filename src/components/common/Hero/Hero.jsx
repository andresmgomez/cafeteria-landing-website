import { Button, Container, Row, Col } from 'react-bootstrap';

import Slider from 'react-slick';
import classes from './Hero.module.css';
import styling from './HeroSlider.module.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import siteImages from '../../../constants/siteImages';

export function HeroComponent() {
	const settings = {
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
		dotsClass: true,
		draggable: false,
		arrows: false,
	};
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
							<Slider className={`${styling.heroSlider}`} {...settings}>
								<div className='item'>
									<div className={`${classes.fillPicture}`}>
										<img
											src={siteImages.placeImage1}
											alt='Local people discovering our exclusive coffee place.'
										/>
									</div>
								</div>
								<div className='item'>
									<div className={`${classes.fillPicture}`}>
										<img
											src={siteImages.placeImage2}
											alt='Barista serving our deluxe coffee in delicate cups.'
										/>
									</div>
								</div>
								<div className='item'>
									<div className={`${classes.fillPicture}`}>
										<img
											src={siteImages.placeImage3}
											alt='Glamorous lady enjoying our coconut cream machiatto.'
										/>
									</div>
								</div>
								<div className='item'>
									<div className={`${classes.fillPicture}`}>
										<img
											src={siteImages.placeImage4}
											alt='Another lady enjoying our coffee cream capuccino cup.'
										/>
									</div>
								</div>
							</Slider>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
