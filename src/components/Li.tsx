import React from 'react'
import { useSelectedTopic } from './Utils/SelectedTopicContext'
import convertChildrenToString from './Utils/convertChildrenToString'

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

	const childrenString = convertChildrenToString(children)

	return (
		<li className={covered ? lessonStyling.covered : lessonStyling.notCovered}>
			<a
				onClick={
					covered
						? () =>
								setSelectedTopic(
									selectedTopic.subject !== childrenString
										? childrenString
										: '',
									'lesson 1'
								)
						: undefined
				}
			>
				{children}
			</a>
		</li>
	)
}

export default Li
