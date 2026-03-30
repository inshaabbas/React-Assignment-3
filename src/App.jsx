import './App.css'
import Main from './components/routing/Main'
import Courses from './pages/Courses'
import Footer from './pages/Footer'
import Home from './pages/Home'
import Learning from './pages/Learning'
import Mentors from './pages/Mentors'
import Subscribe from './pages/Subscribe'
import Testimonial from './pages/Testimonial'

function App() {

  return (
    <>
    <Main/>
    <Home/>
    <Courses/>
    <Learning/>
    <Testimonial/>
    <Mentors/>
    <Subscribe/>
    <Footer/>
    </>
  )
}

export default App
