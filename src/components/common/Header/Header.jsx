import { Container, Row, Col } from 'react-bootstrap';
import classes from './Header.module.css';

export function HeaderComponent() {
	return (
		<header className={`${classes.headerArea}`}>
			<Container>
				<Row>
					<Col md={12}>
						<nav className={`${classes.topNavbar}`}>
							<a href='index.html' className={`${classes.logo}`}>
								<h5 className={`${classes.mainLogo}`}>Clichee</h5>
							</a>
							<ul className={`${classes.nav}`}>
								<li>
									<a href='#home' className='active'>
										Home
									</a>
								</li>
								<li>
									<a href='#about'>About</a>
								</li>
								<li>
									<a href='#pastries'>Pastries</a>
								</li>
								<li>
									<a href='#contact'>Contact</a>
								</li>
							</ul>
						</nav>
					</Col>
				</Row>
			</Container>
		</header>
	);
}
