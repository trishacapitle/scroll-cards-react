import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function ServicesSection() {
  const ref = useRef();
  
	useGSAP(() => {
		ScrollTrigger.create({
			trigger: ".services",
			start: "top top",
			end: `+=${window.innerHeight * 4}px`,
			pin: ".services",
			pinSpacing: true,
		});
		ScrollTrigger.create({
			trigger: ".services",
			start: "top top",
			end: `+=${window.innerHeight * 4}px`,
			onLeave: () => {
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
				gsap.set(".cards", {
					position: "fixed",
					top: 0,
					left: 0,
					width: "100vw",
					height: "100vh",
				});
			},
		});
	}, ref);

	return (
		<section className="services" ref={ref}>
			<div className="services-header">
				<h1>Smooth animations that feels right</h1>
			</div>
			</section>
		);
	}
