import Aside from './components/Aside'
import NavBar from './components/NavBar'
import User from './components/User.json'
import { useSelectedTopic } from './components/Utils/SelectedTopicContext'

import './App.css'

function App() {
	const { selectedTopic } = useSelectedTopic()

	return (
		<>
			<NavBar title="InfoTech" user={User} />
			<main className="flex">
				{selectedTopic.subject && <Aside title={selectedTopic.subject} />}
				<section></section>
			</main>
		</>
	)
}

export default App
