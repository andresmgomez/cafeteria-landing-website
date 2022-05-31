import './App.css';
import { HeaderComponent } from './components/common/Header/Header';
import { HeroComponent } from './components/common/Hero/Hero';
import { AboutComponent } from './components/About/About';

function App() {
	return (
		<>
			<HeaderComponent />
			<main>
				<HeroComponent />
				<AboutComponent />
			</main>
		</>
	);
}

export default App;
