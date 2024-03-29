import React from 'react';
import ProjectItem from './ProjectItem';
import axiosMovies from '../public/assets/projects/axiosMovies.jpg';
import coolStyle from '../public/assets/projects/coolStyle.jpg'
import calculator from '../public/assets/projects/calculator.jpg'
import menu from '../public/assets/projects/menu.jpg'
import cart from '../public/assets/projects/react-cart.jpg'
import cocktails from '../public/assets/projects/cocktailsApi.JPG'
import cronoRental from '../public/assets/projects/cronoRental.jpg'
import githubUsers from '../public/assets/projects/github-users.JPG'
import reactEcomerce from '../public/assets/projects/react-e-comerce.jpg'


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
          <div className='max-w-[1240px] mx-auto px-2 py-16'>
              <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
              <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
            <ProjectItem title='Crono-Rental page' backgroundImg={cronoRental} projectUrl='/CronoRental' skills='React.js, Css, Html'
          />
            <ProjectItem title='Github Users Searcher' backgroundImg={githubUsers} projectUrl='/githubUsers' skills='React.js, Css, Html'
          />
          <ProjectItem title='Axios Movies' backgroundImg={axiosMovies} projectUrl='/axiosMovies' skills='Js, axiox, Css, Html'
          />
          <ProjectItem title='e-comerce' backgroundImg={reactEcomerce} projectUrl='/ECommerce' skills='Js, Css, Html, React.js, Auth0, Stripe, Node.js'
          />
          <ProjectItem title='Cocktails App' backgroundImg={cocktails} projectUrl='/CocktailsApp' skills='React.js, Css, Html'
          />
          <ProjectItem title='React Menu' backgroundImg={menu} projectUrl='/Menu' skills='React, Css, Html'
          />
          <ProjectItem title='useReducer-useContext Cart' backgroundImg={cart} projectUrl='/Cart' skills='React.js, Css, Html'
          />
          <ProjectItem title='React Calculator' backgroundImg={calculator} projectUrl='/calculator' skills='React.js, Css, Html'
          />
        

            </div>
      </div>
    </div>
  )
}

export default Projects
