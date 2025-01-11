import React from 'react'
import User from './User.json'
import { Lesson } from './Utils/Interfaces'

interface AsideButtonProps {
	lesson: Lesson
	backgroundColor: string
	onLessonChange: (newLesson: Lesson) => void
}

const AsideButton: React.FC<AsideButtonProps> = ({
	lesson,
	backgroundColor,
	onLessonChange,
}) => {
	const coveredLessons = User.CoveredTopics.Lessons
	const btnStyling = `btnCoveredLessonStyling mb-2`

	if (!coveredLessons.includes(lesson.title)) {
		backgroundColor = '#808080'
	}

	return (
		<button
			onClick={
				coveredLessons.includes(lesson.title)
					? () => onLessonChange(lesson)
					: undefined
			}
			className={btnStyling}
			style={{ backgroundColor }}
		>
			<li className="text-white text-[17px] font-semibold">{lesson.title}</li>
		</button>
	)
}

//ave to make the bookmark looking buttons to display the lessons also have to make them brightly colored or grayish if the lesson hasnt been covered yet by the user

export default AsideButton
