import './App.css';
import { HeaderComponent } from './components/Common/Header/Header';
import { HeroComponent } from './components/Common/Hero/Hero';
import { AboutComponent } from './components/About/About';
import { PastriesComponent } from './components/Pastries/Pastries';

function App() {
	return (
		<>
			<HeaderComponent />
			<main>
				<HeroComponent />
				<AboutComponent />
				<PastriesComponent />
			</main>
		</>
	);
}

export default App;
