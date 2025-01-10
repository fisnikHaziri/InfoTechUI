import React from 'react'
import { useSelectedTopic } from './Utils/SelectedTopicContext'

interface AsideProps {
	title: string
}

const Aside: React.FC<AsideProps> = ({ title }) => {
	const { selectedTopic } = useSelectedTopic()

	const btnStyling =
		'bg-white py-1 px-4 border-stone-300 hover:translate-x-[10px] duration-500 border-[1px] rounded-[7px] text-start'

	return (
		<aside className="w-[20rem] flex-shrink min-w-[10rem] h-screen bg-[#38bdf8] border-r-[1px] border-stone-300">
			<h1 className="text-[24px] font-bold pb-10 text-white">{title}</h1>
			<ul className="pl-5 pb-10 flex flex-col gap-2">
				{selectedTopic.lessons.map((lesson) => {
					return (
						<button className={btnStyling}>
							<li>{lesson.title}</li>
						</button>
					)
				})}
			</ul>
		</aside>
	)
}

export default Aside
