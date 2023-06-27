import clsx from "clsx";
import { animate, stagger } from "motion";
import { useEffect } from "react";

const AnimatedLetter = ({ letter = "" }) => {
	return (
		<span
			className={clsx(
				"text-[10vw] uppercase inline-block leading-[12vw] overflow-hidden text-reveal-dirty-merch-twist-span-parent text-saffron"
			)}>
			<span className="text-reveal-dirty-merch-twist-span text-[10vw] leading-[10vw]">
				{letter}
			</span>
		</span>
	);
};

const TextYReveal = ({ title = [""] }) => {
	useEffect(() => {
		const twistSpans = document.querySelectorAll(
			".text-reveal-dirty-merch-twist-span"
		);
		if (!twistSpans) return;
		animate(
			twistSpans,
			{
				transform: "none",
			},
			{
				duration: 2,
				delay: stagger(0.09),
			}
		);
		return () => {};
	}, []);

	return (
		<div>
			<div className="flex ">
				{title.map((headerItem, index) => (
					<AnimatedLetter key={headerItem + index} letter={headerItem} />
				))}
			</div>
		</div>
	);
};

export default TextYReveal;
