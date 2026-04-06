import React from 'react'


import { Starbackground } from './components/Starbackground';
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skill'
import { Projects } from "./components/Projects"
import { Contact } from "./components/Contact"
import { Footer } from './components/Footer';


export const Portfolio = () => {


  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>


      {/* Background effects */}

      <Starbackground />

      {/* navbar */}

      <Navbar />

      {/* mincontent */}

      <Hero />

      <About />

      <Skills />

      {/* <Projects/>  */}

      <Contact />

      {/* footer */}

      <Footer />

    </div>
  )
}

export default Portfolio;