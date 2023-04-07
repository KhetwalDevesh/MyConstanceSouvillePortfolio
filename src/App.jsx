import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { animate, inView } from "motion";
function App() {
	const [count, setCount] = useState(0);

	const scrollToTop = () => {
		const topContainer = document.getElementById("top-of-page");
		topContainer.scrollIntoView({
			block: "start",
			behavior: "smooth",
			inline: "start",
		});
	};

	const scrollToAbout = () => {
		const aboutContainer = document.getElementById("about-container");
		aboutContainer.scrollIntoView({
			block: "start",
			behavior: "smooth",
			inline: "start",
		});
	};

	const scrollToProjects = () => {
		const projectsContainer = document.getElementById("projects-container");
		projectsContainer.scrollIntoView({
			block: "start",
			behavior: "smooth",
			inline: "start",
		});
	};

	const scrollToContact = () => {
		const contactContainer = document.getElementById("contact-container");
		contactContainer.scrollIntoView({
			block: "start",
			behavior: "smooth",
			inline: "start",
		});
	};

	useEffect(() => {
		const lenis = new Lenis({
			duration: 5,
		});
		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);

	useEffect(() => {
		animate(
			document.querySelectorAll(".animate-text"),
			{
				transform: "none",
			},
			{
				duration: 2,
			}
		);
		animate(
			document.querySelectorAll(".animate-card"),
			{
				transform: "none",
			},
			{
				duration: 1,
				delay: 1,
			}
		);
		inView(document.querySelector(".about-container"), () => {
			animate(
				document.querySelectorAll(".about"),
				{
					transform: "none",
					opacity: 1,
				},
				{
					duration: 2,
					delay: 2,
				}
			);
		});
	}, []);

	return (
		<div id="top-of-page" className="p-[21px] pb-24 bg-[#b2b2a8] top-0 h-full ">
			<div className="bg-[#c1c0b6] rounded-[45px] h-full ">
				<header className="flex flex-col gap-2 p-[3vh] pt-[4vh] mb-[calc(16vh + 10px)] w-500:pb-0 w-380:pt-[3vh] w-380:px-5">
					<div className="my-name overflow-hidden h-fit py-3 w-380:text-[1.8rem]  w-470:text-[2.2rem] w-500:text-[2.8rem] w-600:text-[3.2rem] w-800:text-[4rem] w-1050:text-[5.5rem] w-1200:text-[7rem] w-1500:text-[8rem] w-1670:text-[9rem] m-0 text-[11rem] text-[#3f3b37] font-PlayfairDisplayItalic tracking-[0.07em] leading-[.7] flex justify-around ">
						<span className="animate-text">Devesh</span>{" "}
						<span className="animate-text">Khetwal</span>
					</div>
					<div className="w-380:mt-[0.5rem] w-800:text-[8px] w-1200:text-[9px] flex justify-between  mt-[1.5rem] pt-[1.3rem] text-[11px] tracking-[.06em] leading-[1] font-[700] border-t-[1px] border-[#3f3b37] text-[#3f3b37]">
						<p className="w-500:hidden ">FULLSTACK DEVELOPER</p>
						<p className="w-500:hidden ">AVAILABLE FOR WORK</p>
						<p className="w-500:hidden ">EMAIL</p>
						<p className="w-500:hidden ">
							<span>DELHI</span>
						</p>
					</div>
				</header>
				<div className="pl-[3vh] pr-[3vh]  mt-[85px] w-600:mt-[0px]">
					<div className="overflow-hidden w-380:h-10 w-470:h-16 w-600:h-20 w-600:justify-center flex justify-between justify-self-stretch items-center h-44 border-b-[1px] border-[#3f3b37] ">
						<button
							onClick={scrollToAbout}
							className="animate-card about-card w-600:hidden w-800:w-36 w-800:h-[70px] w-800:rounded-br-[20px] w-800:text-[11px] w-800:p-2 w-1050:w-52 w-1050:h-[100px] w-1200:text-[13px] w-1200:w-60 w-1200:h-[120px] w-1500:w-72 h-[140px] w-80 rounded-br-[33px] bg-[#fbefdf] flex justify-between p-4 items-end font-neueHaasDisplayRoman">
							<span>About</span>
							<span>01</span>
						</button>
						<div className="animate-text w-380:text-[1.5rem] w-470:text-[2rem] w-600:text-[2.5rem] w-800:text-[3.5rem] w-1050:text-[5rem] w-1200:text-[6rem] w-1500:text-[7rem] w-1670:text-[8rem] font-neueHaasDisplayRoman text-[10rem] text-[#3f3b37] tracking-[-.03em]">
							Indian
						</div>
						<button
							onClick={scrollToProjects}
							className="animate-card project-card w-600:hidden w-800:w-36 w-800:h-[70px] w-800:rounded-br-[20px] w-800:text-[11px] w-800:p-2 w-1050:w-52 w-1050:h-[100px] w-1200:text-[13px] w-1500:w-72 w-1200:w-60 w-1200:h-[120px] h-[140px] w-80 rounded-br-[33px] bg-[#db4c44] flex justify-between p-4 items-end font-neueHaasDisplayRoman text-white">
							<span>Projects</span>
							<span>02</span>
						</button>
					</div>
					<div className="overflow-hidden w-380:h-12 w-380:flex-row w-600:justify-evenly w-470:h-16 w-600:h-20  font-neueHaasDisplayRoman text-[10rem] text-[#3f3b37] flex  justify-between justify-self-stretch items-center h-44 border-b-[1px] border-[#3f3b37]">
						<span className="animate-text w-380:text-[1.5rem] w-470:text-[2rem] w-600:text-[2.5rem] w-800:text-[3.5rem] w-1050:text-[5rem] w-1200:text-[6rem] w-1500:text-[7rem] w-1670:text-[8rem] tracking-[-.03em]">
							Fullstack
						</span>
						<span className="animate-text w-380:text-[1.5rem] w-470:text-[2rem] w-600:text-[2.5rem] w-800:text-[3.5rem] w-1050:text-[5rem] w-1200:text-[6rem] w-1500:text-[7rem] w-1670:text-[8rem] tracking-[-.03em]">
							Developer
						</span>
					</div>
					<div className="overflow-hidden w-380:h-12 w-600:justify-evenly w-470:h-16 w-600:h-20 flex justify-between justify-self-stretch items-center h-44 border-b-[1px] border-[#3f3b37]">
						<div className="animate-text w-380:text-[1.5rem] w-470:text-[2rem] w-600:text-[2.5rem] w-800:text-[3.5rem] w-1050:text-[5rem] w-1200:text-[6rem] w-1500:text-[7rem] w-1670:text-[8rem] font-neueHaasDisplayRoman text-[10rem] text-[#3f3b37] tracking-[-.03em]">
							Based
						</div>
						<button
							onClick={scrollToContact}
							className="animate-card contact-card w-600:hidden w-800:w-36 w-800:h-[70px] w-800:rounded-br-[20px] w-800:text-[11px] w-800:p-2 w-1050:w-52 w-1050:h-[100px] w-1200:text-[13px] w-1500:w-72 h-[140px] w-1200:w-60 w-1200:h-[120px] w-80  rounded-br-[33px] bg-[#e7aa2c]  flex justify-between p-4 items-end font-neueHaasDisplayRoman">
							<span>Contact</span>
							<span>03</span>
						</button>
						<div className="animate-text w-380:text-[1.5rem] w-470:text-[2rem] w-600:text-[2.5rem] w-800:text-[3.5rem] w-1050:text-[5rem] w-1200:text-[6rem] w-1500:text-[7rem] w-1670:text-[8rem] font-neueHaasDisplayRoman text-[10rem] text-[#3f3b37] tracking-[-.03em]">
							in Delhi
						</div>
					</div>
				</div>

				<div className="about-contact-project-cards overflow-hidden hidden w-470:pb-0 w-600:flex flex-col items-center p-10 ">
					<button
						onClick={scrollToAbout}
						className="about-card animate-card2 w-600:px-3 w-600:py-2 w-380:w-44 w-380:h-[70px] w-470:w-60 w-600:rounded-br-[20px] w-470:text-[13px] h-[90px] w-80 rounded-br-[33px] bg-[#fbefdf] flex justify-between p-4 items-end font-neueHaasDisplayRoman">
						<span>About</span>
						<span>01</span>
					</button>

					<button
						onClick={scrollToProjects}
						className="project-card animate-card2 w-600:px-3 w-600:py-2 w-380:w-44  w-380:h-[70px] w-470:w-60 w-600:rounded-br-[20px] w-470:text-[13px] h-[90px] w-80 rounded-br-[33px] bg-[#db4c44] text-white flex justify-between p-4 items-end font-neueHaasDisplayRoman">
						<span>Projects</span>
						<span>02</span>
					</button>

					<button
						onClick={scrollToContact}
						className="contact-card animate-card2 w-600:px-3 w-600:py-2 w-380:w-44  w-380:h-[70px] w-470:w-60 w-600:rounded-br-[20px] w-470:text-[13px] h-[90px] w-80 rounded-br-[33px] bg-[#e7aa2c] flex justify-between p-4 items-end font-neueHaasDisplayRoman">
						<span>Contact</span>
						<span>03</span>
					</button>
				</div>

				<div
					id="about-container"
					className="about-container overflow-hidden flex justify-center items-center p-48  pb-24 text-[8rem] w-380:px-8 w-380:text-[2.2rem] w-470:px-10 w-470:pb-16 w-470:text-[2.8rem] w-600:px-12 w-600:pt-24 w-600:text-[3rem] w-800:pb-20 w-800:text-[4rem] w-1050:text-[5rem] w-1050:px-16 w-1200:px-24 w-1500:text-[6rem] text-[#3f3b37] ">
					<span className="about opacity-0 ">
						I craft the websites with great attention to details. I love working
						on websites with smooth animation and beautiful layouts.{" "}
						<a
							href="https://drive.google.com/file/d/1EPY4PSfsz3AWdQdjCJ6XrairRgWEAStH/view"
							className="text-blue-800"
							target="_blank">
							Here
						</a>{" "}
						is the link to my Resume.
					</span>
				</div>

				<div
					id="projects-container"
					className="mt-[85px] px-[3vh] pb-[3vh] w-600:mt-[10px] w-380:mt-0">
					<div className="w-470:h-32 h-44 border-b-[1px] border-[#3f3b37] flex items-center justify-center">
						<div className="project-heading relative w-470:h-24 w-380:text-[1.5rem] w-470:text-[2rem] w-600:text-[2.5rem] w-800:text-[3.5rem] w-1050:text-[5rem] w-1200:text-[6rem] w-1500:text-[7rem] w-1670:text-[8rem] flex items-center justify-center  h-44 font-neueHaasDisplayRoman text-[10rem] text-[#3f3b37] tracking-[-.03em]">
							Projects
						</div>
					</div>
					<div className="pt-[3vh] grid grid-cols-15 pb-[21vw] w-800:flex w-800:flex-col">
						<div className="relative col-start-1 col-span-6 rounded-br-[2.8rem] overflow-hidden w-380:h-[6rem] w-380:rounded-br-[1.5rem] w-800:h-[8rem]  w-1050:h-[25rem] w-1200:h-[30rem] h-[37.5rem]">
							<a
								href="https://dirt-shop-ecom.netlify.app/"
								target="_blank"
								onMouseEnter={() => {
									const projectClass1 = document.querySelector(".project-1");
									const projectImage1 =
										document.querySelector(".project-1-image");
									projectClass1.style.opacity = 0;
									projectImage1.style.transform = "scale(1.2)";
								}}
								onMouseLeave={() => {
									const projectClass1 = document.querySelector(".project-1");
									const projectImage1 =
										document.querySelector(".project-1-image");
									projectClass1.style.opacity = 1;
									projectImage1.style.transform = "none";
								}}
								className="absolute project project-1 w-[100%] z-10 w-380:h-[6rem] w-380:rounded-br-[1.5rem] w-800:h-[8rem]  w-1050:h-[25rem] w-1200:h-[30rem]  p-[20px]    rounded-br-[2.8rem] bg-[#3f3b37] h-[37.5rem] flex flex-col justify-end">
								<div className="flex justify-between text-[40px] w-380:text-[16px] w-1200:text-[30px] w-800:text-[20px]">
									<div className="text-[#fbefdf] font-ppNeueMontrealMedium ">
										dirt-shop
									</div>
									<div className="text-[#fbefdf] font-ppNeueMontrealMedium ">
										01
									</div>
								</div>
							</a>
							<a
								href="https://dirt-shop-ecom.netlify.app/"
								target="_blank"
								className="circle-cursor  absolute w-[100%] w-380:h-[6rem] w-380:rounded-br-[1.5rem] w-800:h-[8rem] w-1050:h-[25rem] w-1200:h-[30rem] rounded-br-[2.8rem] bg-[#3f3b37] h-[37.5rem] flex flex-col ">
								<img
									src="https://res.cloudinary.com/dikpmkuiw/image/upload/v1680885185/dirt-shop-thumb_lo7dbx.png"
									className="project-1-image project h-full w-380:rounded-br-[1.5rem] rounded-br-[2.8rem]"
								/>
							</a>
						</div>

						<div className="relative col-start-7 col-span-6 rounded-br-[2.8rem] overflow-hidden w-380:h-[6rem] w-380:rounded-br-[1.5rem] w-800:h-[8rem]  w-1050:h-[25rem] w-1200:h-[30rem] h-[37.5rem]">
							<a
								href="https://utopia-farming-2d0b57.netlify.app/"
								target="_blank"
								onMouseEnter={() => {
									const projectClass2 = document.querySelector(".project-2");
									const projectImage2 =
										document.querySelector(".project-2-image");
									projectClass2.style.opacity = 0;
									projectImage2.style.transform = "scale(1.2)";
								}}
								onMouseLeave={() => {
									const projectClass2 = document.querySelector(".project-2");
									const projectImage2 =
										document.querySelector(".project-2-image");
									projectClass2.style.opacity = 1;
									projectImage2.style.transform = "none";
								}}
								className="absolute project project-2 w-[100%] z-10 w-380:h-[6rem] w-380:rounded-br-[1.5rem] w-800:h-[8rem]  w-1050:h-[25rem] w-1200:h-[30rem] p-[20px] col-start-7 col-span-6 rounded-br-[2.8rem] bg-[#e7aa2c] h-[37.5rem] flex flex-col justify-end">
								<div className="flex justify-between text-[40px] w-380:text-[16px] w-1200:text-[30px] w-800:text-[20px]">
									<div className="text-[#fbefdf] font-ppNeueMontrealMedium ">
										Utopia Farming
									</div>
									<div className="text-[#fbefdf] font-ppNeueMontrealMedium ">
										02
									</div>
								</div>
							</a>
							<a
								href="https://utopia-farming-2d0b57.netlify.app/"
								target="_blank"
								className="circle-cursor  absolute w-[100%] w-380:h-[6rem] w-380:rounded-br-[1.5rem] w-800:h-[8rem] w-1050:h-[25rem] w-1200:h-[30rem] rounded-br-[2.8rem] bg-[#3f3b37] h-[37.5rem] flex flex-col ">
								<img
									src="https://res.cloudinary.com/dikpmkuiw/image/upload/v1680237456/utopia-farm-thumb_vs5lzx.png"
									className="project-2-image project h-full w-380:rounded-br-[1.5rem] rounded-br-[2.8rem]"
								/>
							</a>
						</div>

						<div className="relative col-start-1 col-span-9 rounded-br-[2.8rem] overflow-hidden w-380:h-[6rem] w-380:rounded-br-[1.5rem] w-800:h-[8rem]  w-1050:h-[25rem] w-1200:h-[30rem] h-[37.5rem]">
							<a
								href="https://stalktrendz-frontend.netlify.app/"
								target="_blank"
								onMouseEnter={() => {
									const projectClass3 = document.querySelector(".project-3");
									const projectImage3 =
										document.querySelector(".project-3-image");
									projectClass3.style.opacity = 0;
									projectImage3.style.transform = "scale(1.2)";
								}}
								onMouseLeave={() => {
									const projectClass3 = document.querySelector(".project-3");
									const projectImage3 =
										document.querySelector(".project-3-image");
									projectClass3.style.opacity = 1;
									projectImage3.style.transform = "none";
								}}
								className="absolute project project-3 w-[100%] z-10  w-380:h-[6rem] w-380:rounded-br-[1.5rem] w-800:h-[8rem] w-1050:h-[25rem] w-1200:h-[30rem] p-[20px]  rounded-br-[2.8rem] bg-[#db4c44] h-[37.5rem] flex flex-col justify-end">
								<div className="flex justify-between text-[40px] w-380:text-[16px] w-1200:text-[30px] w-800:text-[20px]">
									<div className="text-[#fbefdf] font-ppNeueMontrealMedium ">
										StalkTrendz
									</div>
									<div className="text-[#fbefdf] font-ppNeueMontrealMedium ">
										03
									</div>
								</div>
							</a>
							<a
								href="https://stalktrendz-frontend.netlify.app/"
								target="_blank"
								className="circle-cursor  absolute w-[100%] w-380:h-[6rem] w-380:rounded-br-[1.5rem] w-800:h-[8rem] w-1050:h-[25rem] w-1200:h-[30rem] rounded-br-[2.8rem] bg-[#3f3b37] h-[37.5rem] flex flex-col ">
								<img
									src="https://res.cloudinary.com/dikpmkuiw/image/upload/v1680237440/stalktrendz-thumb_monvge.png"
									className="project-3-image project h-full w-380:rounded-br-[1.5rem] rounded-br-[2.8rem]"
								/>
							</a>
						</div>

						<div className="relative col-start-10 col-span-6 rounded-br-[2.8rem] overflow-hidden w-380:h-[6rem] w-380:rounded-br-[1.5rem] w-800:h-[8rem]  w-1050:h-[25rem] w-1200:h-[30rem] h-[37.5rem]">
							<a
								href="https://email-view-76f3de.netlify.app/"
								target="_blank"
								onMouseEnter={() => {
									const projectClass4 = document.querySelector(".project-4");
									const projectImage4 =
										document.querySelector(".project-4-image");
									projectClass4.style.opacity = 0;
									projectImage4.style.transform = "scale(1.2)";
								}}
								onMouseLeave={() => {
									const projectClass4 = document.querySelector(".project-4");
									const projectImage4 =
										document.querySelector(".project-4-image");
									projectClass4.style.opacity = 1;
									projectImage4.style.transform = "none";
								}}
								className="absolute project project-4 w-[100%] z-10  w-380:h-[6rem] w-380:rounded-br-[1.5rem] w-800:h-[8rem] w-1050:h-[25rem] w-1200:h-[30rem] p-[20px]  rounded-br-[2.8rem] bg-[#fbefdf] h-[37.5rem] flex flex-col justify-end">
								<div className="flex justify-between text-[40px] w-380:text-[16px] w-1200:text-[30px] w-800:text-[20px]">
									<div className="text-[#3f3b37] font-ppNeueMontrealMedium ">
										Email View
									</div>
									<div className="text-[#3f3b37] font-ppNeueMontrealMedium ">
										04
									</div>
								</div>
							</a>
							<a
								href="https://email-view-76f3de.netlify.app/"
								target="_blank"
								className="circle-cursor  absolute w-[100%] w-380:h-[6rem] w-380:rounded-br-[1.5rem] w-800:h-[8rem] w-1050:h-[25rem] w-1200:h-[30rem] rounded-br-[2.8rem] bg-[#3f3b37] h-[37.5rem] flex flex-col ">
								<img
									src="https://res.cloudinary.com/dikpmkuiw/image/upload/v1680237484/email-view-thumb_itbrpy.png"
									className="project-4-image project h-full w-380:rounded-br-[1.5rem] rounded-br-[2.8rem]"
								/>
							</a>
						</div>

						<div className="relative col-start-1 col-span-6 rounded-br-[2.8rem] overflow-hidden w-380:h-[6rem] w-380:rounded-br-[1.5rem] w-800:h-[8rem]  w-1050:h-[25rem] w-1200:h-[30rem] h-[37.5rem]">
							<a
								href="https://landing-page-creative-developer.netlify.app/"
								target="_blank"
								onMouseEnter={() => {
									const projectClass5 = document.querySelector(".project-5");
									const projectImage5 =
										document.querySelector(".project-5-image");
									projectClass5.style.opacity = 0;
									projectImage5.style.transform = "scale(1.2)";
								}}
								onMouseLeave={() => {
									const projectClass5 = document.querySelector(".project-5");
									const projectImage5 =
										document.querySelector(".project-5-image");
									projectClass5.style.opacity = 1;
									projectImage5.style.transform = "none";
								}}
								className="absolute project project-5 w-[100%] z-10  w-380:h-[6rem] w-380:rounded-br-[1.5rem] w-800:h-[8rem] w-1050:h-[25rem] w-1200:h-[30rem] p-[20px]  rounded-br-[2.8rem] bg-[#fbefdf] h-[37.5rem] flex flex-col justify-end">
								<div className="flex justify-between text-[40px] w-380:text-[16px] w-1200:text-[30px] w-800:text-[20px]">
									<div className="text-[#3f3b37] font-ppNeueMontrealMedium ">
										Creative Developer
									</div>
									<div className="text-[#3f3b37] font-ppNeueMontrealMedium ">
										05
									</div>
								</div>
							</a>
							<a
								href="https://landing-page-creative-developer.netlify.app/"
								target="_blank"
								className="circle-cursor  absolute w-[100%] w-380:h-[6rem] w-380:rounded-br-[1.5rem] w-800:h-[8rem] w-1050:h-[25rem] w-1200:h-[30rem] rounded-br-[2.8rem] bg-[#3f3b37] h-[37.5rem] flex flex-col ">
								<img
									src="https://res.cloudinary.com/dikpmkuiw/image/upload/v1680237473/creative-dev-thumb_n8z3el.png"
									className="project-5-image project h-full w-380:rounded-br-[1.5rem] rounded-br-[2.8rem]"
								/>
							</a>
						</div>

						<a
							href=""
							className="circle-cursor card  w-380:h-[6rem] w-380:rounded-br-[1.5rem] w-800:h-[8rem] w-1050:h-[25rem] w-1200:h-[30rem] p-[20px] col-start-7 col-span-9 rounded-br-[2.8rem] bg-[#e7aa2c] h-[37.5rem] flex flex-col justify-end">
							<div className="w-1200:text-[30px] w-800:text-[20px] w-380:text-[16px]"></div>
						</a>

						<a
							href=""
							className="circle-cursor card  w-380:h-[6rem] w-380:rounded-br-[1.5rem] w-800:h-[8rem] w-1050:h-[25rem] w-1200:h-[30rem] p-[20px] col-start-4 col-span-6 rounded-br-[2.8rem] bg-[#db4c44] h-[37.5rem] flex flex-col justify-end">
							<div className="w-1200:text-[30px] w-800:text-[20px] w-380:text-[16px]"></div>
						</a>
						<a
							href=""
							className="circle-cursor card  w-380:h-[6rem] w-380:rounded-br-[1.5rem] w-800:h-[8rem] w-1050:h-[25rem] w-1200:h-[30rem] p-[20px] col-start-10 col-span-6 rounded-br-[2.8rem] bg-[#3f3b37] h-[37.5rem] flex flex-col justify-end">
							<div className="w-1200:text-[30px] w-800:text-[20px] w-380:text-[16px]"></div>
						</a>
					</div>
				</div>

				<div
					id="contact-container"
					className="bg-[#3f3b37] h-full w-full rounded-[3.2rem] p-[3vh] pt-[8rem] w-500:pt-28">
					<div className="w-470:pl-0 pl-52 w-600:pl-10 w-800:pl-20 w-1050:pl-40">
						<p className="w-380:text-[1.4rem] w-380:px-0 w-470:text-[1.8rem] w-500:pb-10 w-500:pr-8 w-800:text-[2rem] w-800:pr-24 w-800:pl-5 w-1050:text-[2.5rem] w-1200:text-[3rem] w-1500:text-[3.5rem] pl-40 w-1050:pl-20 pb-40 pr-40 text-[#fbefdf] text-[4rem] font-neueHaasDisplayRoman leading-none tracking-[.05em] ">
							I'm currently looking for a web development internship/job based
							on my skills. I am free and ready to join immediately. <br />
							Consider contacting me if you are interested to interview me.{" "}
						</p>
					</div>

					<div className="pt-[3vh] grid grid-cols-15 pb-[18rem] w-600:pb-[14rem] w-800:flex w-800:flex-col">
						<a
							href="https://twitter.com/khetwal_devesh"
							target="_blank"
							className="circle-cursor w-380:h-[7rem] w-800:h-[10rem] w-1050:h-[25rem] p-[20px] w-800:p-[10px] col-start-1 col-span-6 border-[1px] border-[#fbefdf]  rounded-br-[2.8rem]  h-[37.5rem] w-1200:h-[30rem] flex flex-col justify-between">
							<div className="text-[#fbefdf] font-ppNeueMontrealMedium text-[20px] w-800:text-[13px] w-1050:text-[15px]">
								Twitter
							</div>
							<div className="text-[#fbefdf] font-ppNeueMontrealMedium text-[20px] w-800:text-[13px] w-1050:text-[15px]">
								@khetwal_devesh
							</div>
						</a>
						<a
							href="https://www.linkedin.com/in/devesh-khetwal-b1bb0a190/"
							target="_blank"
							className="circle-cursor w-380:h-[7rem] w-800:h-[10rem] w-1050:h-[25rem] p-[20px] w-800:p-[10px]  col-start-7 col-span-6 border-[1px] border-[#fbefdf] rounded-br-[2.8rem]  h-[37.5rem] w-1200:h-[30rem] flex flex-col justify-between">
							<div className="text-[#fbefdf] font-ppNeueMontrealMedium text-[20px] w-800:text-[13px] w-1050:text-[15px]">
								LinkedIn
							</div>
							<div className="text-[#fbefdf] font-ppNeueMontrealMedium text-[20px] w-800:text-[13px] w-1050:text-[15px]">
								Devesh Khetwal
							</div>
						</a>
						<a
							href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTLpRGCXWFMMgngwdZMdBzVWMhmgpzvSrJgcQRnrCFNrcBxWDQTcbMCpkHGhsmPpFvNDZg"
							target="_blank"
							className="circle-cursor w-380:h-[7rem] w-800:h-[10rem] w-1050:h-[25rem]  p-[20px] w-800:p-[10px] col-start-1 col-span-9 border-[1px] border-[#fbefdf] rounded-br-[2.8rem]  h-[37.5rem] w-1200:h-[30rem] flex flex-col justify-between">
							<div className="text-[#fbefdf] font-ppNeueMontrealMedium text-[20px] w-800:text-[13px] w-1050:text-[15px]">
								Email
							</div>
							<div className="text-[#fbefdf] font-ppNeueMontrealMedium text-[20px] w-800:text-[13px] w-1050:text-[15px]">
								deveshkhetwal05@gmail.com
							</div>
						</a>
					</div>
					<a
						onClick={scrollToTop}
						className="text-[#fbefdf] text-[11px] font-ppNeueMontrealBold cursor-pointer">
						BACK TO THE TOP
					</a>
				</div>
			</div>
		</div>
	);
}

export default App;
