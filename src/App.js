import './App.css';
import { HeaderComponent } from './components/common/Header/Header';
import { HeroComponent } from './components/common/Hero/Hero';

function App() {
	return (
		<>
			<HeaderComponent />
			<main>
				<HeroComponent />
			</main>
		</>
	);
}

export default App;
