import User from '../User.json'
import { Lesson } from './Interfaces'

export default async function returnLessons(topic: string): Promise<Lesson[]> {
	switch (topic) {
		case 'HTML':
			return User.Subjects.HTML.lessons as Lesson[]

		case 'JavaScript':
			return User.Subjects.JavaScript.lessons as Lesson[]

		case 'React':
			return User.Subjects.React.lessons as Lesson[]

		case 'CS':
			return User.Subjects.CS.lessons as Lesson[]

		case 'NetMVC':
			return User.Subjects.NetMVC.lessons as Lesson[]

		case 'NetAPI':
			return User.Subjects.NetAPI.lessons as Lesson[]

		default:
			return []
	}
}
