import React from 'react'

import { Cursor } from './components/Cursor';
import { Scene } from './components/Scene';
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
    <div className='min-h-screen bg-transparent text-foreground overflow-x-hidden relative cursor-none'>

      {/* Aurora ambient background */}
      <div className="aurora-bg" />

      {/* Custom Cursor */}
      <Cursor />

      {/* Star & Meteor Background */}
      <Starbackground />

      {/* 3D Scene */}
      <Scene />

      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <Hero />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Footer />

    </div>
  )
}

export default Portfolio;