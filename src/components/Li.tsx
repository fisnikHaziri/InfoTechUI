import React, { useEffect, useState } from 'react'
import convertChildrenToString from './Utils/convertChildrenToString'
import returnLessons from './Utils/returnLessons'
import { useSelectedTopic } from './Utils/SelectedTopicContext'

interface Lesson {
	title: string
	keyPoints: string
	content: string
}

interface LiProps {
	children: React.ReactNode
	covered: boolean
}

const lessonStyling = {
	covered:
		'font-semibold text-white hover:cursor-pointer duration-500 ease-in-out hover:bg-white hover:text-black',
	notCovered:
		'font-semibold text-stone-600 hover:cursor-pointer duration-500 ease-in-out hover:bg-stone-400 hover:text-stone-800',
}

const Li: React.FC<LiProps> = ({ covered, children }) => {
	const { setSelectedTopic, selectedTopic } = useSelectedTopic()
	const [lessons, setLessons] = useState<Lesson[]>([])
	const childrenString = convertChildrenToString(children)

	useEffect(() => {
		async function getData() {
			if (covered) {
				try {
					const lessonsData = await returnLessons(childrenString)
					setLessons(lessonsData)
				} catch (error) {
					console.error('Failed to fetch lessons:', error)
				}
			}
		}

		getData()
	}, [childrenString, covered])

	return (
		<li className={covered ? lessonStyling.covered : lessonStyling.notCovered}>
			<a
				onClick={
					covered
						? () => {
								setSelectedTopic(
									selectedTopic.subject !== childrenString
										? childrenString
										: '',
									lessons
								)
						  }
						: undefined
				}
			>
				{childrenString}
			</a>
		</li>
	)
}

export default Li
