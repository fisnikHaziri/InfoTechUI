import User from '../User.json'

export default async function returnLessons(target: string) {
	switch (target) {
		case 'HTML':
			return User.Subjects.HTML.lessons

		case 'JavaScript':
			return User.Subjects.JavaScript.lessons

		case 'React':
			return User.Subjects.React.lessons

		case 'CS':
			return User.Subjects.CS.lessons

		case 'NetMVC':
			return User.Subjects.NetMVC.lessons

		case 'NetAPI':
			return User.Subjects.NetAPI.lessons

		default:
			return []
	}
}
