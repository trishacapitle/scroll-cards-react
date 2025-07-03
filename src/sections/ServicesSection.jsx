import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function ServicesSection() {
	// Initialize GSAP animations and ScrollTrigger effects
	useGSAP(() => {
		// Pin the .services section during scroll for 4 viewport heights
		ScrollTrigger.create({
			trigger: ".services",
			start: "top top",
			end: `+=${window.innerHeight * 4}px`,
			pin: ".services",
			pinSpacing: true,
		});

		// Adjust .cards position when leaving and re-entering the pinned section
		ScrollTrigger.create({
			trigger: ".services",
			start: "top top",
			end: `+=${window.innerHeight * 4}px`,
			onLeave: () => {
				// When leaving, set .cards to absolute at the correct scroll position
				const top =
					document.querySelector(".services").getBoundingClientRect().top +
					window.pageYOffset;
				gsap.set(".cards", {
					position: "absolute",
					top,
					left: 0,
					width: "100vw",
					height: "100vh",
				});
			},
			onEnterBack: () => {
				// When re-entering, set .cards back to fixed
				gsap.set(".cards", {
					position: "fixed",
					top: 0,
					left: 0,
					width: "100vw",
					height: "100vh",
				});
			},
		});
	});

	return (
		<section className="services">
			<div className="services-header">
				<h1>Smooth animations that feels right</h1>
			</div>
		</section>
	);
}
