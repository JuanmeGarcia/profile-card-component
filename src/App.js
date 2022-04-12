import React from 'react'
import { Button } from './components/Button'
import { Footer } from './components/Footer'
import { Name } from './components/Name'
import { Photo } from './components/Photo'
import { Section } from './components/Section'
import info from './info'
import './style/style.css'


function App() {
	return (
		<main className='main'>
			<Photo />
            <div className='profile-data'>
			    <Name />
                <div className='button-container'>
                    <Button text={"Email"} type={false}/>
                    <Button text={"LinkedIn"} type={true}/>
                </div>
            </div>
            {info.information.map((section, index)=> (
                <Section 
                key={index}
                title={section.title}
                paragraph={section.paragraph}
                />
            ))}
            <Footer/>
		</main>
	)
}

export { App }
