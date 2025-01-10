import React from 'react'
import { Lesson } from './Utils/Interfaces'

interface FocusedLessonProps {
	lesson: Lesson
}

const FocusedLesson: React.FC<FocusedLessonProps> = ({ lesson }) => {
	return (
		<div
			id="FocusedLesson"
			className="w-screen flex flex-col p-5 bg-stone-200 min-h-screen"
		>
			<h1 className="text-[40px] font-semibold pl-4">{lesson.title}</h1>
			<hr id="TheIconicHr" />
			{lesson.keyPoints.length > 0 && (
				<section className="bg-stone-300 p-5 my-6 border rounded-[7px]">
					<h3 className="mb-3 text-[25px] font-semibold">Key points</h3>
					<ul className="pl-5 ml-10">
						{lesson.keyPoints.map((point, index) => {
							return (
								<li
									key={`${index}.${point[0]}`}
									className="list-[square] mb-2 text-[18px] tracking-wide"
								>
									{point}
								</li>
							)
						})}
					</ul>
				</section>
			)}
			<main className="bg-stone-300 p-5 my-6 border rounded-[7px]">
				{lesson.content}
			</main>
		</div>
	)
}

export default FocusedLesson
