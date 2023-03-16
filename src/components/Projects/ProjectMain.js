import React from 'react'
import Card from '../UI/Card'
import CustomSection from '../UI/CustomSection'
import ProjectList from './ProjectList'
import CustomHeaderText from '../UI/CustomHeaderText'
import CustomEmoji from '../UI/CustomEmoji'
import CustomParagraphText from '../UI/CustomParagraphText'

const ProjectMain = () => {
    const projectData = [
        {
            id: 1,
            title: 'Food Mart',
            description: 'Food Mart is a Full-Stack E-commerce web app made with Next.js, Tailwind, Redux, Next/Link, Next/Router, Firebase, NextAuth, Stripe. And deployed using Github and Vercel',
            projectImage: 'https://i.ibb.co/R2SGCwn/Screenshot-2023-03-16-at-10-27-27-AM.png',
            skills: ['Next.js', 'Redux', 'Firebase', 'Tailwind css', 'Next Auth', 'Stripe'],
            repo: 'https://github.com/realemmanuel/food-mart',
            demo: 'https://emmanuelfood-mart.vercel.app/',
        },
        {
            id: 2,
            title: 'Linkedin Clone',
            description: 'This Project is a Linkedin Clone where users can create account and sign in and can also post on the app',
            projectImage: 'https://i.ibb.co/2q0Tvcn/Screenshot-2023-03-16-at-10-27-42-AM.png',
            skills: ['React.js', 'Redux', 'CSS', 'Firebase'],
            repo: 'https://github.com/realemmanuel/linkedin-clone',
            demo: '',
        },
        {
            id: 3,
            title: 'Expense Tracker',
            description: 'Expense Tracker is an app where users can create expenses by inputing the Title, Amount, Date. And users can also filter the expenses by year',
            projectImage: 'https://i.ibb.co/s6jWR8Z/Screenshot-2023-03-16-at-10-44-16-AM.png',
            skills: ['React.js', 'CSS'],
            repo: 'https://github.com/realemmanuel/expense-tracker',
            demo: 'https://emmanuelexpense-tracker.vercel.app/',
        },
        {
            id: 4,
            title: 'Pokedex',
            description: 'A frontend UI for rendering data from the pokeapi API. Built with React JS & Tailwind css',
            projectImage: 'https://career.astra.co.id/static/media/image_not_available1.94c0c57d.png',
            skills: ['React.js', 'API', 'Tailwind css'],
            repo: '',
            demo: '',
        },
        {
            id: 5,
            title: 'Task Planner',
            description: 'Daily Task Planner is a web app that helps you manage your daily tasks and make you day more productive with its built in features',
            projectImage: 'https://i.ibb.co/GdMrcDP/Screenshot-2023-03-16-at-10-36-37-AM.png',
            skills: ['React.js', 'Tailwind css'],
            repo: 'https://github.com/realemmanuel/Task-Planner',
            demo: 'https://emmanueltask-planner.vercel.app/',
        },
        {
            id: 6,
            title: 'SkyLeap',
            description: 'Skyleap is a social platform made with Reactjs, Tailwind, Context Api, Firebase, Where users can sign up using their Google account and will be redirected to the home page where you can post pictures, videos, text. Also, users can also like other user post and comment.',
            projectImage: 'https://i.ibb.co/vdkGnY9/Screenshot-2023-03-16-at-10-37-58-AM.png',
            skills: ['React.js', 'Tailwind css', 'Context Api', 'Firebase'],
            repo: 'https://github.com/realemmanuel/skyleap',
            demo: 'https://realskyleap.vercel.app/home',
        },
    ]
  return (
    <Card>
        <CustomSection>
            <CustomHeaderText>MY PROJECTS</CustomHeaderText>
            <CustomEmoji>🛠️</CustomEmoji>
            <CustomParagraphText>Here you will find some of the personal projects that I created with each project containing links to a github repo and live demo</CustomParagraphText>
        </CustomSection>
    
        <main className='mt-20 grid gap-10 ml-5 mr-5 xl:ml-32 xl:mr-32 justify-center xl:flex-row md:flex-row sm:flex-row'>
            {projectData.map((project) => {
                return (
                    <ProjectList
                        key={project.id}
                        title={project.title} 
                        description={project.description} 
                        projectImage={project.projectImage} 
                        skills={project.skills} 
                        repo={project.repo} 
                        demo={project.demo} 
                    />
                )
            })}
        </main>
    </Card>
  )
}

export default ProjectMain