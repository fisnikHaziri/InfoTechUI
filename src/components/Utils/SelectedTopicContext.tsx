import { createContext, ReactNode, useContext, useState } from 'react'

interface Lessons {
	title: string
	keyPoints: string
	content: string
}

interface SelectedTopic {
	subject: string
	lessons: Lessons[]
}

interface SelectedTopicContextType {
	selectedTopic: SelectedTopic
	setSelectedTopic: (subject: string, lessons: Lessons[]) => void
}

const SelectedTopicContext = createContext<
	SelectedTopicContextType | undefined
>(undefined)

interface SelectedTopicProviderProps {
	children: ReactNode
}

export const SelectedTopicProvider: React.FC<SelectedTopicProviderProps> = ({
	children,
}) => {
	const [selectedTopic, setSelectedTopic] = useState<SelectedTopic>({
		subject: '',
		lessons: [],
	})

	function handleSelectTopic(subject: string, lessons: Lessons[]) {
		setSelectedTopic({ subject, lessons })
	}

	return (
		<SelectedTopicContext.Provider
			value={{ selectedTopic, setSelectedTopic: handleSelectTopic }}
		>
			{children}
		</SelectedTopicContext.Provider>
	)
}

export const useSelectedTopic = (): SelectedTopicContextType => {
	const context = useContext(SelectedTopicContext)
	if (!context) {
		throw new Error(
			'useSelectedTopic must be used within a SelectedTopicProvider'
		)
	}
	return context
}
