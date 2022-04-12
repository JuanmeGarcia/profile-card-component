import React from 'react'
import profilePicture from '../assets/profile.png'

function Photo() {
	return (
		<figure className='picture-container'>
			<img src={profilePicture} alt="" />
		</figure>
	)
}

export { Photo }
