
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const smoothStep = (p) => p * p * (3 - 2 * p);

export default function HeroSection() {
	useGSAP(() => {
		const lenis = new Lenis();
		lenis.on("scroll", ScrollTrigger.update);
		gsap.ticker.add((time) => lenis.raf(time * 1000));
		gsap.ticker.lagSmoothing(0);

			ScrollTrigger.create({
				trigger: ".hero",
				start: "top top",
				end: "75% top",
				scrub:1,
				onUpdate: (self) => {
					const progress = self.progress;

					const heroCardsContainerOpacity = gsap.utils.interpolate(
						1,
						0.5,
						smoothStep(progress)
					);
					gsap.set(".hero-cards", { opacity: heroCardsContainerOpacity });

					["#hero-card-1", "#hero-card-2", "#hero-card-3"].forEach(
						(cardId, index) => {
							const delay = index * 0.9;
							const cardProgress = gsap.utils.clamp(
								0,
								1,
								(progress - delay * 0.1) / (1 - delay * 0.1)
							);

							const y = gsap.utils.interpolate(
								"0%",
								"250%",
								smoothStep(cardProgress)
							);

							const scale = gsap.utils.interpolate(
								1,
								0.75,
								smoothStep(cardProgress)
							);

							let x = "0%";
							let rotation = 0;
							if (index === 0) {
								x = gsap.utils.interpolate(
									"0%",
									"90%",
									smoothStep(cardProgress)
								);
								rotation = gsap.utils.interpolate(
									0,
									-15,
									smoothStep(cardProgress)
								);
							} else if (index === 2) {
								x = gsap.utils.interpolate(
									"0%",
									"-90%",
									smoothStep(cardProgress)
								);
								rotation = gsap.utils.interpolate(
									0,
									15,
									smoothStep(cardProgress)
								);
							}

							gsap.set(cardId, {
								y: y,
								x: x,
								rotation: rotation,
								scale: scale,
							});
						}
					);
				},
			});
	});

	return (
		<section className="hero">
			<div className="hero-cards">
				<div className="card" id="hero-card-1">
					<div className="card-title">
						<span>Plan</span>
						<span>01</span>
					</div>
					<div className="card-title">
						<span>01</span>
						<span>Plan</span>
					</div>
				</div>
				<div className="card" id="hero-card-2">
					<div className="card-title">
						<span>Design</span>
						<span>02</span>
					</div>
					<div className="card-title">
						<span>02</span>
						<span>Design</span>
					</div>
				</div>
				<div className="card" id="hero-card-3">
					<div className="card-title">
						<span>Develop</span>
						<span>03</span>
					</div>
					<div className="card-title">
						<span>03</span>
						<span>Develop</span>
					</div>
				</div>
			</div>
		</section>
	);
}
