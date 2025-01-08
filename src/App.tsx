import Aside from './components/Aside'
import NavBar from './components/NavBar'
import { useSelectedTopic } from './components/Utils/SelectedTopicContext'

import './App.css'

const UserFisnik = {
	HTML: true,
	JavaScript: true,
	React: false,
	CS: true,
	NetMVC: true,
	NetAPI: false,
}

function App() {
	const { selectedTopic } = useSelectedTopic()

	return (
		<>
			<NavBar title="InfoTech" user={UserFisnik} />
			<main className="flex">
				{selectedTopic.subject && <Aside title={selectedTopic.subject} />}
				<section></section>
			</main>
		</>
	)
}

export default App
