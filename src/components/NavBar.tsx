import React from 'react'
import Li from './Li'
import { User } from './Utils/Interfaces'

interface NavBarProps {
	user: User
	title: string
}

const NavBar: React.FC<NavBarProps> = ({ title, user }) => {
	const subjectArray = Object.entries(user.Subjects)
	const coveredTopics = user.CoveredTopics.Subjects

	return (
		<nav>
			<h1 className="font-semibold text-white hover:cursor-pointer">{title}</h1>
			<ul>
				{subjectArray.map(([key, value]) => (
					<Li key={key} covered={coveredTopics.includes(key)}>
						{value.Title}
					</Li>
				))}
			</ul>
		</nav>
	)
}

export default NavBar
