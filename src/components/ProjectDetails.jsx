import { SmoothScrollbar } from "@14islands/r3f-scroll-rig";
import React from "react";
import { useLocation } from "react-router-dom";
import Details from "../project/details";
import TextYReveal from "./text-y-reveal";

const ProjectDetails = () => {
	let { state } = useLocation();
	console.log("state", JSON.stringify(state, null, 2));
	const projectData = state.projectDetails;
	const titleChars = projectData.title.split("");
	return (
		// <SmoothScrollbar>
		// 	{(bind) => (
		<div className="bg-[#FFFDFD]">
			<div className="py-12 mx-4 md:py-24 md:mx-24">
				<TextYReveal title={titleChars} />
			</div>
			<img
				className="relative border-0 border-blue-400 w-full object-cover"
				src={projectData.images[0]}
				alt=""
				width={1280}
				height={640}
				priority
			/>
			<Details
				description="DirtyMerch is an e-commerce website that caters to eco-conscious hoodie enthusiasts in the Americas. As a UI project, it showcases key elements essential to a successful online store. With a focus on sustainability, DirtyMerch offers a wide range of eco-friendly hoodies, providing customers with stylish and responsible fashion choices."
				platform="Web"
				year="2023"
			/>
			<section className="mx-4 py-12 md:py-24 md:mx-24 flex flex-col items-center justify-center space-y-12 md:space-y-40">
				<img
					className="border-0 border-blue-400 w-[1048px] h-[590px]"
					src={projectData.images[1]}
					alt=""
					width={1048}
					height={590}
					loading="lazy"
				/>

				<img
					className="border-0 border-blue-400 w-[1048px] h-[590px]"
					src={projectData.images[2]}
					alt=""
					width={1048}
					height={590}
					loading="lazy"
				/>
				<img
					className="border-0 border-blue-400 w-[1048px] h-[590px]"
					src={projectData.images[3]}
					alt=""
					width={1048}
					height={590}
					loading="lazy"
				/>
				<img
					className="border-0 border-blue-400  mb-12 md:mb-0 w-[1048px] h-[590px]"
					src={projectData.images[4]}
					alt=""
					width={1048}
					height={590}
					loading="lazy"
				/>
				<img
					className="border-0 border-blue-400  mb-12 md:mb-0 w-[1048px] h-[590px]"
					src={projectData.images[0]}
					alt=""
					width={1048}
					height={590}
					loading="lazy"
				/>
			</section>

			{/* <NextLink link={["N", "a", "m", "e"]} href="/projects/name" /> */}
			<div className="h-20 md:block md:h-60"></div>
		</div>
		// 	)}
		// </SmoothScrollbar>
	);
};

export default ProjectDetails;
