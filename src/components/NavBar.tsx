import React from 'react'
import Li from './Li'

interface Lessons {
	title: string
	keyPoints: string
	content: string
}

interface Subject {
	Title: string
	lessons: Lessons[]
}

interface User {
	Subjects: {
		HTML: Subject
		JavaScript: Subject
		React: Subject
		CS: Subject
		NetMVC: Subject
		NetAPI: Subject
	}
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
				{Object.entries(user.Subjects).map(([key, value]) => (
					<Li key={key} covered={value.Title !== ''}>
						{key}
					</Li>
				))}
			</ul>
		</nav>
	)
}

export default NavBar
