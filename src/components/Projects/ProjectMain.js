import React from 'react'
import ProjectList from './ProjectList'

const ProjectMain = () => {
    const projectData = [
        {
            id: 1,
            title: 'Food Mart',
            description: 'Food Mart is a Full-Stack E-commerce web app made with Next.js, Tailwind, Redux, Next/Link, Next/Router, Firebase, NextAuth, Stripe. And deployed using Github and Vercel',
            projectImage: 'https://career.astra.co.id/static/media/image_not_available1.94c0c57d.png',
            skills: ['Next.js', 'Redux', 'Firebase', 'Tailwind css', 'Next Auth', 'Stripe']
        },
        {
            id: 2,
            title: 'Linkedin Clone',
            description: 'This Project is a Linkedin Clone where users can create account and sign in and can also post on the app',
            projectImage: 'https://career.astra.co.id/static/media/image_not_available1.94c0c57d.png',
            skills: ['React.js', 'Redux', 'Tailwind css', 'Firebase']
        },
        {
            id: 3,
            title: 'Expense Tracker',
            description: 'Expense Tracker is an app where users can create expenses by inputing the Title, Amount, Date. And users can also filter the expenses by year',
            projectImage: 'https://career.astra.co.id/static/media/image_not_available1.94c0c57d.png',
            skills: ['React.js', 'CSS']
        },
        {
            id: 4,
            title: 'Pokedex',
            description: 'A frontend UI for rendering data from the pokeapi API. Built with React JS & Tailwind css',
            projectImage: 'https://career.astra.co.id/static/media/image_not_available1.94c0c57d.png',
            skills: ['React.js', 'API', 'Tailwind css']
        },
    ]
  return (
    <div className='w-screen bg-gray-100 flex flex-col select-none h-full'>
        <div className='mt-36 ml-auto mr-auto flex flex-col gap-4'>
        <h1 className='font-righteous text-4xl font-black text-center'>MY PROJECTS</h1>
        <span className='text-center'>🛠️</span>
        <p className='ml-5 mr-5 text-neutral-500 text-center'>Here you will find some of the personal projects that I created with each project containing links to a github repo and live demo</p>
    </div>
    
    <main className='mt-20 grid gap-10 ml-5 mr-5 xl:ml-32 xl:mr-32 justify-center xl:flex-row md:flex-row sm:flex-row'>
        {projectData.map((project) => {
            return (
                <ProjectList key={project.id} title={project.title} description={project.description} projectImage={project.projectImage} skills={project.skills} />
            )
        })}
    </main>
    </div>
  )
}

export default ProjectMain