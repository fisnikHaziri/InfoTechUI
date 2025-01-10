import React from 'react'
import { Lesson } from './Utils/Interfaces'

interface FocusedLessonProps {
	lesson: Lesson
}

const FocusedLesson: React.FC<FocusedLessonProps> = ({ lesson }) => {
	return (
		<div id="FocusedLesson" className="w-screen flex flex-col p-5">
			<h1 className="text-[40px] font-semibold pl-4">{lesson.title}</h1>
			<hr id="TheIconicHr" />
			<section>
				<ul>
					{lesson.keyPoints.map((point) => {
						return <li>{point}</li>
					})}
				</ul>
			</section>
			<main>{lesson.content}</main>
		</div>
	)
}

export default FocusedLesson
