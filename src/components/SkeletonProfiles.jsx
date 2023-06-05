export function SkeletonProfiles() {
	return (
		<>
			{[1, 2, 3, 4, 5, 6].map((i) => (
				<div key={i} className="flex items-center  gap-4">
					<span className=" h-16 w-16 animate-pulse-fast rounded-full bg-gray-300" />
					<span className="inline-block  h-6 w-24 animate-pulse-fast rounded-full bg-gray-300 p-2"></span>
				</div>
			))}
		</>
	)
}
