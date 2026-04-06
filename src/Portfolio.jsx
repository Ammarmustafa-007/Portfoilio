import React from 'react'

import { Cursor } from './components/Cursor';
import { Scene } from './components/Scene';
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skill'
import { Projects } from "./components/Projects"
import { Contact } from "./components/Contact"
import { Footer } from './components/Footer';


export const Portfolio = () => {


  return (
    <div className='min-h-screen bg-transparent text-foreground overflow-x-hidden relative cursor-none'>

      <Cursor />
      {/* Background 3D effects */}

      <Scene />

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