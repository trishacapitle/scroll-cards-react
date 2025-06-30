import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";
import CardsSection from "./sections/CardsSection";

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
			<section className="outro">
				<h1>It's just the start of the beginning...</h1>
			</section>
		</>
	);
}

export default App;
