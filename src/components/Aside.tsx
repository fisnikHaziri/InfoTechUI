import React from 'react'
import AsideButton from './AsideButton'
import { Lesson } from './Utils/Interfaces'
import { useSelectedTopic } from './Utils/SelectedTopicContext'

interface AsideProps {
	onLessonChange: (newLesson: Lesson) => void
}

const Aside: React.FC<AsideProps> = ({ onLessonChange }) => {
	const { selectedTopic } = useSelectedTopic()

	const colors = [
		'#BB173C',
		'#FE501E',
		'#C6E134',
		'#38C35E',
		'#105C9A',
		'#221F34',
		'#583C64',
	]

	return (
		<aside className="flex-shrink min-w-[20rem] w-[20rem] min-h-screen bg-[#38bdf8] border-r-[1px] border-stone-300 duration-500">
			<h1 className="text-[24px] font-bold pb-10 text-white">
				{selectedTopic.subject}
			</h1>
			<ul className="pl-5 pb-10 flex flex-col gap-2">
				{selectedTopic.lessons.map((lesson, index) => {
					const backgroundColor = colors[index % colors.length]
					return (
						<AsideButton
							key={lesson.title}
							lesson={lesson}
							backgroundColor={backgroundColor}
							onLessonChange={onLessonChange}
						/>
					)
				})}
			</ul>
		</aside>
	)
}

export default Aside
