import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";
import CardsSection from "./sections/CardsSection";
import Outro from "./sections/Outro";

function App() {
	return (
		<>
			<nav className="nav">
				<div className="logo">Logo Here</div>
				<div className="menu-btn">Menu</div>
			</nav>
			<HeroSection />
			<section className="about">
				<h1>Keep scrolling — it gets good</h1>
			</section>
			<ServicesSection />
			<CardsSection />
			<Outro />
		</>
	);
}

export default App;
