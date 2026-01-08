import { Route, Routes } from 'react-router-dom'
import './App.css'
import Bv from './components/Bv.jsx'
import Navbar from './components/Navbar.jsx'
import Juice from './components/Juice.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Menu1 from './components/Menu1.jsx'
function App() {

  return (
    <>
      <Navbar></Navbar>
      {/* <Bv></Bv> */}
      <Routes>
        <Route path='/' element={<Bv></Bv>}> </Route>
        {/* <Route path='/Menu' element={}></Route> */}
        <Route path='/Price' element={<Juice></Juice>}></Route>
        <Route path='/About' element={<About></About>}></Route>
         <Route path='/Contact' element={<Contact></Contact>}></Route>
         <Route path='/Menu' element={<Menu1></Menu1>}></Route>
      </Routes>
    </>
  )
}

export default App
