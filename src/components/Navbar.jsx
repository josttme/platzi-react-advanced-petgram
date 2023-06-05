import { NavLink } from 'react-router-dom'
import { User } from './svg/User'
import { Heart } from './svg/Heart'
import { Profiles } from './svg/Profiles'
import { Home } from './svg/Home'

export function Navbar() {
	return (
		<>
			<section className="fixed bottom-0 left-0 z-20 flex h-14 w-full justify-around  bg-[#000019]">
				<NavLink
					to="/"
					className={({ isActive }) =>
						isActive ? ' bg-[#0938c0]' : ''
					}
				>
					<div className="grid h-14 w-14 place-content-center">
						<Home />
					</div>
				</NavLink>
				<NavLink
					to="/profiles"
					className={({ isActive }) =>
						isActive ? ' bg-[#0938c0]' : ''
					}
				>
					<div className="grid h-14 w-14 place-content-center">
						<Profiles />
					</div>
				</NavLink>
				<NavLink
					to="/favorites"
					className={({ isActive }) =>
						isActive ? ' bg-[#0938c0]' : ''
					}
				>
					<div className="grid h-14 w-14 place-content-center">
						<Heart />
					</div>
				</NavLink>
				<NavLink
					to="/user"
					className={({ isActive }) =>
						isActive ? ' bg-[#0938c0]' : ''
					}
				>
					<div className="grid h-14 w-14 place-content-center">
						<div className="relative  h-8 w-8 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
							<User />
						</div>
					</div>
				</NavLink>
			</section>
		</>
	)
}
