import React from 'react'

interface Lesson {
	title: string
	keyPoints: string
	content: string
}

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
	const btnStyling = `btnCoveredLessonStyling `

	return (
		<button
			onClick={() => onLessonChange(lesson)}
			className={btnStyling}
			style={{ backgroundColor }}
		>
			<li>{lesson.title}</li>
		</button>
	)
}

//ave to make the bookmark looking buttons to display the lessons also have to make them brightly colored or grayish if the lesson hasnt been covered yet by the user

export default AsideButton
