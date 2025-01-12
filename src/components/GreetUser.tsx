import React, { useEffect, useState } from 'react'

interface GreetUserProps {
	name: string
}

const GreetUser: React.FC<GreetUserProps> = ({ name }) => {
	const [time, setTime] = useState(new Date())

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(new Date())
		}, 1000)

		return () => clearInterval(timer)
	}, [])

	return (
		<div className="h-screen w-screen flex justify-center align-middle flex-col">
			<h1 className="font-bold text-[40px] text-center">Hello {name}</h1>
			<h3 className="font-semibold text-[27px] text-center">
				Please select a lesson to proceed...
			</h3>
			<h5 className="font-[600] text-[20px] text-center">
				Curent time: {time.toLocaleTimeString()}
			</h5>
		</div>
	)
}

export default GreetUser
