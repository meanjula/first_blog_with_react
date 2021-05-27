import React from 'react'
import ReactDOM from 'react-dom'
import {courses} from './data'
import './index.css'
import Header from './components/header'
import Courses from './components/courses'
import About from './components/about'
import ApplicationForm from './components/applicationForm'
import CoreTechnology from './components/coreTechnology'
import Contacts from './components/contacts'
import Projects from './components/projects'
import Footer from './components/footer'
const rootElement = document.getElementById('root')
  const Main = ()=> (
      <main>
        <About/>
        <Courses{...courses}/>
        <Projects{...courses}/>
        <ApplicationForm/>
        <CoreTechnology/>
        <Contacts/>
        <section>
          <h1>
            <i className ="fas fa-podcast"></i>
            Podcasts
          </h1>
          <p>You can find all my podcast about web technologies, data science and other related technologies below(*not uploaded yet).</p>
        
          <article>
            <h2>
              <i className ="fas fa-headphones"></i>Audio podcast: Episode 1
            </h2>
            <audio controls>
              <source src="./assets/audios/audio_1.mp3" />
              Your browser does not support the audio element.
            </audio>
          </article>
          <article>
            <h2>
              <i className ="fas fa-headphones"></i>Audio podcast: Episode 2
            </h2>
            <audio controls>
              <source src="./assets/audios/audio_2.mp3" />
              Your browser does not support the audio element.
          </audio>
          </article>
          <hr/>
        </section>
        <section>
          <h1>
            <i className ="fas fa-play-circle"></i> Video course(*not uploaded yet)
          </h1>
          <article id ="videos">
            <video src="./assets/videos/js-project.mp4" controls width ="85%">
              Your browser does not support the video tag.
            </video>
          </article>
          <hr/>
        </section>
      </main>
  )


  const App = () => (
    <div className='app'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
ReactDOM.render(<App/>,rootElement)   

