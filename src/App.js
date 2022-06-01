import './App.css';
import { HeaderComponent } from './components/common/Header/Header';
import { HeroComponent } from './components/common/Hero/Hero';
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
