import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const smoothStep = (p) => p * p * (3 - 2 * p);

export default function CardsSection() {
	gsap.registerPlugin(ScrollTrigger);

	useGSAP(() => {
		ScrollTrigger.create({
			trigger: ".services",
			start: "top bottom",
			end: `+=${window.innerHeight * 4}px`,
			scrub: 1,
			onUpdate: (self) => {
				const progress = self.progress;
				const hp = gsap.utils.clamp(0, 1, progress / 0.9);
				gsap.set(".services-header", {
					y: gsap.utils.interpolate("400%", "0%", smoothStep(hp)),
				});

				["#card-1", "#card-2", "#card-3"].forEach((cardId, index) => {
					const delay = index * 0.5;
					const cardProgress = gsap.utils.clamp(
						0,
						1,
						(progress - delay * 0.1) / (0.9 - delay * 0.1)
					);

					const innerCard = document.querySelector(
						`${cardId} .flip-card-inner`
					);

					let y;
					if (cardProgress < 0.4) {
						const normalizedProgress = cardProgress / 0.4;
						y = gsap.utils.interpolate(
							"-100%",
							"50%",
							smoothStep(normalizedProgress)
						);
					} else if (cardProgress < 0.6) {
						const normalizedProgress = (cardProgress - 0.4) / 0.2;
						y = gsap.utils.interpolate(
							"50%",
							"0%",
							smoothStep(normalizedProgress)
						);
					} else {
						y = "0%";
					}

					let scale;
					if (cardProgress < 0.4) {
						const normalizedProgress = cardProgress / 0.4;
						scale = gsap.utils.interpolate(
							0.25,
							0.75,
							smoothStep(normalizedProgress)
						);
					} else if (cardProgress < 0.6) {
						const normalizedProgress = (cardProgress - 0.4) / 0.2;
						scale = gsap.utils.interpolate(
							0.75,
							1,
							smoothStep(normalizedProgress)
						);
					} else {
						scale = 1;
					}

					let opacity;
					if (cardProgress < 0.2) {
						const normalizedProgress = cardProgress / 0.2;
						opacity = smoothStep(normalizedProgress);
					} else {
						opacity = 1;
					}

					let x, rotate, rotationY;
					if (cardProgress < 0.6) {
						x = index === 0 ? "100%" : index === 1 ? "0%" : "-100%";
						rotate = index === 0 ? -5 : index === 1 ? 0 : 5;
						rotationY = 0;
					} else if (cardProgress < 1) {
						const normalizedProgress = (cardProgress - 0.6) / 0.4;
						x = gsap.utils.interpolate(
							index === 0 ? "100%" : index === 1 ? "0%" : "-100%",
							"0%",
							smoothStep(normalizedProgress)
						);
						rotate = gsap.utils.interpolate(
							index === 0 ? -5 : index === 1 ? 0 : 5,
							0,
							smoothStep(normalizedProgress)
						);
						rotationY = smoothStep(normalizedProgress) * 180;
					} else {
						x = "0%";
						rotate = 0;
						rotationY = 180;
					}

					gsap.set(cardId, {
						opacity: opacity,
						y: y,
						x: x,
						rotate: rotate,
						scale: scale,
					});

					gsap.set(innerCard, {
						rotationY: rotationY,
					});
				});
			},
    });
	});

	return (
		<section className="cards">
			<div className="cards-container">
				<div className="card" id="card-1">
					<div className="card-wrapper">
						<div className="flip-card-inner">
							<div className="flip-card-front">
								<div className="card-title">
									<span>Plan</span>
									<span>01</span>
								</div>
								<div className="card-title">
									<span>01</span>
									<span>Plan</span>
								</div>
							</div>
							<div className="flip-card-back">
								<div className="card-title">
									<span>Plan</span>
									<span>01</span>
								</div>
								<div className="card-copy">
									<p>Discovery</p>
									<p>Audit</p>
									<p>User Flow</p>
									<p>Site Map</p>
									<p>Personas</p>
									<p>Strategy</p>
								</div>
								<div className="card-title">
									<span>01</span>
									<span>Plan</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="card" id="card-2">
					<div className="card-wrapper">
						<div className="flip-card-inner">
							<div className="flip-card-front">
								<div className="card-title">
									<span>Design</span>
									<span>02</span>
								</div>
								<div className="card-title">
									<span>02</span>
									<span>Design</span>
								</div>
							</div>
							<div className="flip-card-back">
								<div className="card-title">
									<span>Design</span>
									<span>02</span>
								</div>
								<div className="card-copy">
									<p>Wireframes</p>
									<p>UI Kits</p>
									<p>Prototypes</p>
									<p>Visual Style</p>
									<p>Interaction</p>
									<p>Design QA</p>
								</div>
								<div className="card-title">
									<span>02</span>
									<span>Design</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="card" id="card-3">
					<div className="card-wrapper">
						<div className="flip-card-inner">
							<div className="flip-card-front">
								<div className="card-title">
									<span>Develop</span>
									<span>03</span>
								</div>
								<div className="card-title">
									<span>03</span>
									<span>Develop</span>
								</div>
							</div>
							<div className="flip-card-back">
								<div className="card-title">
									<span>Develop</span>
									<span>03</span>
								</div>
								<div className="card-copy">
									<p>HTML/CSS/JS</p>
									<p>CMS Build</p>
									<p>GSAP Motion</p>
									<p>Responsive</p>
									<p>Optimization</p>
									<p>Launch</p>
								</div>
								<div className="card-title">
									<span>03</span>
									<span>Develop</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
