import React from 'react'

function Button({text, type}) {

	return (
		<div>
            <button className={`button ${type && 'primary-button' }`} ><span className={`icon-button ${type ? 'linkedin' : 'email'}`}></span>{text}</button>
		</div>
	)
}

export { Button }
