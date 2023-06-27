const Details = ({ description, platform, year }) => {
	return (
		<div className="flex justify-center">
			<div className="max-w-[720px] mx-4 md:mx-auto my-24 md:my-40 font-satoshi text-2xl overflow-hidden ">
				<p className="mb-12 md:mb-20">{description}</p>
				<div className="h-[1px] w-[720px] bg-gray-200"></div>
				<div className="flex items-center justify-between my-10">
					<span>Services</span>
					<span>{platform}</span>
				</div>
				<div className="h-[1px] w-[720px] bg-gray-200"></div>
				<div className="flex items-center justify-between my-10">
					<span>Year</span>
					<span>{year}</span>
				</div>
				<div className="h-[1px] w-[720px] bg-gray-200"></div>
			</div>
		</div>
	);
};

export default Details;
