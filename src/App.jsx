import Header from './components/Header'
import Study from './components/Study'
import Experience from './components/Experience'
import Technologies from './components/Technologies'
import Skills from './components/Skills'
import Contact from './components/Contact'
function App() {

  return (
    <div className='font-sans'>
      <Header/>
      <Study/>
      <Contact/>
      <Experience/>
      <Technologies/>
      <Skills/>
    </div>
  )
}

export default App
