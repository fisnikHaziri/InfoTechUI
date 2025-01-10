import { useState } from 'react'
import './App.css'
import Aside from './components/Aside'
import FocusedLesson from './components/FocusedLesson'
import NavBar from './components/NavBar'
import User from './components/User.json'
import { useSelectedTopic } from './components/Utils/SelectedTopicContext'

interface Lesson {
	title: string
	keyPoints: string
	content: string
}

function App() {
	const [selectedLesson, setSelectedLesson] = useState({
		title: '',
		keyPoints: '',
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
				{selectedTopic.subject && (
					<Aside
						title={selectedTopic.subject}
						onLessonChange={handleLessonChange}
					/>
				)}
				<FocusedLesson lesson={selectedLesson} />
			</main>
		</>
	)
}

export default App
