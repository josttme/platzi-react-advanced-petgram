import { NavLink } from 'react-router-dom'

export function Navbar() {
	return (
		<>
			<section className="fixed bottom-0 left-0 z-20 flex h-12 w-full justify-around  bg-[#000019]">
				<NavLink
					to="/"
					className={({ isActive }) =>
						isActive ? ' bg-[#0938c0]' : ''
					}
				>
					<div className="grid h-12 w-12 place-content-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 256 256"
							className="h-8 w-8 overflow-hidden fill-white/90"
						>
							<path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z" />
						</svg>
					</div>
				</NavLink>
				<NavLink
					to="/users"
					className={({ isActive }) =>
						isActive ? ' bg-[#0938c0]' : ''
					}
				>
					<div className="grid h-12 w-12 place-content-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 256 256"
							className="h-8 w-8 fill-white/90"
						>
							<path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z" />
						</svg>
					</div>
				</NavLink>
				<NavLink
					to="/favorites"
					className={({ isActive }) =>
						isActive ? ' bg-[#0938c0]' : ''
					}
				>
					<div className="grid h-12 w-12 place-content-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 256 256"
							className="h-8 w-8 fill-white/90"
						>
							<path d="M223,57a58.07,58.07,0,0,0-81.92-.1L128,69.05,114.91,56.86A58,58,0,0,0,33,139l89.35,90.66a8,8,0,0,0,11.4,0L223,139a58,58,0,0,0,0-82Zm-11.35,70.76L128,212.6,44.3,127.68a42,42,0,0,1,59.4-59.4l.2.2,18.65,17.35a8,8,0,0,0,10.9,0L152.1,68.48l.2-.2a42,42,0,1,1,59.36,59.44Z" />
						</svg>
					</div>
				</NavLink>
				<NavLink
					to="/user"
					className={({ isActive }) =>
						isActive ? ' bg-[#0938c0]' : ''
					}
				>
					<div className="grid h-12 w-12 place-content-center">
						<div className="relative  h-8 w-8 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
							<svg
								className="absolute -left-1 h-10 w-10 text-gray-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
									clipRule="evenodd"
								></path>
							</svg>
						</div>
					</div>
				</NavLink>
			</section>
		</>
	)
}
