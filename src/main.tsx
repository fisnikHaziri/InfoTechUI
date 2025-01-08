import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { SelectedTopicProvider } from './components/Utils/SelectedTopicContext.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<SelectedTopicProvider>
			<App />
		</SelectedTopicProvider>
	</StrictMode>
)
