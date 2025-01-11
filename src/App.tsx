import { useState } from 'react'
import './App.css'
import Aside from './components/Aside'
import FocusedLesson from './components/FocusedLesson'
import NavBar from './components/NavBar'
import User from './components/User.json'
import { Lesson } from './components/Utils/Interfaces'
import { useSelectedTopic } from './components/Utils/SelectedTopicContext'

function App() {
	const [selectedLesson, setSelectedLesson] = useState({
		title: '',
		keyPoints: [''],
		content: '',
	})
	const { selectedTopic } = useSelectedTopic()

	function handleLessonChange(newLesson: Lesson) {
		setSelectedLesson(newLesson)
	}
	return (
		<>
			<NavBar title="InfoTech" user={User} />
			<main className="flex">
				{selectedTopic.subject && <Aside onLessonChange={handleLessonChange} />}

				{selectedLesson.title && <FocusedLesson lesson={selectedLesson} />}
			</main>
		</>
	)
}

export default App
