import React from 'react'
import Li from './Li'

interface User {
	HTML: boolean
	JavaScript: boolean
	React: boolean
	CS: boolean
	NetMVC: boolean
	NetAPI: boolean
}

interface NavBarProps {
	user: User
	title: string
}

const NavBar: React.FC<NavBarProps> = ({ title, user }) => {
	return (
		<nav>
			<h1 className="font-semibold text-white hover:cursor-pointer">{title}</h1>
			<ul>
				<Li covered={user.HTML}>HTML</Li>
				<Li covered={user.JavaScript}>JavaScript</Li>
				<Li covered={user.React}>React</Li>
				<Li covered={user.CS}>C#</Li>
				<Li covered={user.NetMVC}>MVC</Li>
				<Li covered={user.NetAPI}>API</Li>
			</ul>
		</nav>
	)
}

export default NavBar
