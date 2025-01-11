export interface Lesson {
	title: string
	keyPoints: string[]
	content: string
}

export interface Subject {
	Title: string
	lessons: Lesson[]
}

export interface User {
	CoveredTopics: {
		Subjects: string[]
		Lessons: string[]
	}
	Subjects: {
		HTML: Subject
		JavaScript: Subject
		React: Subject
		CS: Subject
		NetMVC: Subject
		NetAPI: Subject
	}
}
