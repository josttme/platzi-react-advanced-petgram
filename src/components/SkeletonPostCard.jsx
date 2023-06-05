export function SkeletonPostCard() {
	return (
		<>
			{[1, 2, 3].map((i) => (
				<CardSkeleton key={i} />
			))}
		</>
	)
}
function CardSkeleton() {
	return (
		<div className=" mb-2 flex w-full flex-col py-2 transition duration-300 ">
			<div className="flex h-full w-full  items-center gap-2 p-3 ">
				<div className=" h-10 w-10  animate-pulse-fast  rounded-full bg-gray-300 lg:h-16 lg:w-16" />
				<span className="inline-block  h-5 w-20 animate-pulse-fast rounded-full bg-gray-300 p-2"></span>
			</div>
			<div className=" left-0  top-0 h-[17rem] w-full animate-pulse-fast bg-gray-300 lg:h-96" />
			<span className="m-2  inline-block h-8 w-8 animate-pulse-fast rounded-full bg-gray-300 p-2 lg:h-10 lg:w-10"></span>
		</div>
	)
}
