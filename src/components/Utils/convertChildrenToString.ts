import React from 'react'

const convertChildrenToString = (children: React.ReactNode): string => {
	const childrenArray = React.Children.toArray(children)
	const childrenString = childrenArray
		.map((child) => {
			if (typeof child === 'string') {
				return child
			}
			return ''
		})
		.join('')
	return childrenString
}

export default convertChildrenToString
