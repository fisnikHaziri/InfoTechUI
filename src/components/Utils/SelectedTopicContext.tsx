import { createContext, ReactNode, useContext, useState } from 'react'
import { Lesson } from './Interfaces'

interface SelectedTopic {
	subject: string
	lessons: Lesson[]
}

interface SelectedTopicContextType {
	selectedTopic: SelectedTopic
	setSelectedTopic: (subject: string, lessons: Lesson[]) => void
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

	function handleSelectTopic(subject: string, lessons: Lesson[]) {
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
