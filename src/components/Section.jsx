import React from 'react'

function Section({title, paragraph}) {
	return (
        <section className='section-container'>
            <h1>{title}</h1>
            <p>{paragraph}</p>
        </section>
    )
}

export { Section }
