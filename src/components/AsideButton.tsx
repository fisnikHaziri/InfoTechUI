import React from 'react'
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
	const btnStyling = `btnCoveredLessonStyling mb-2`

	return (
		<button
			onClick={() => onLessonChange(lesson)}
			className={btnStyling}
			style={{ backgroundColor }}
		>
			<li className="text-white text-[17px] font-semibold">{lesson.title}</li>
		</button>
	)
}

//ave to make the bookmark looking buttons to display the lessons also have to make them brightly colored or grayish if the lesson hasnt been covered yet by the user

export default AsideButton
