import './App.css';

import { NavbarComponent } from './components/Common/Navbar/Navbar';
import { HeroComponent } from './components/Common/Hero/Hero';
import { AboutComponent } from './components/About/About';
import { PastriesComponent } from './components/Pastries/Pastries';
import { ContactComponent } from './components/Common/Contact/Contact';

function App() {
	return (
		<>
			<header>
				<NavbarComponent />
			</header>
			<main>
				<HeroComponent />
				<AboutComponent />
				<PastriesComponent />
			</main>
			<footer>
				<ContactComponent />
			</footer>
		</>
	);
}

export default App;
