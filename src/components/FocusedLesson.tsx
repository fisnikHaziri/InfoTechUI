import React from 'react'

interface Lesson {
	title: string
	keyPoints: string
	content: string
}

interface FocusedLessonProps {
	lesson: Lesson
}

const FocusedLesson: React.FC<FocusedLessonProps> = ({ lesson }) => {
	return <h1>{lesson.keyPoints}</h1>
}

export default FocusedLesson
