import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './component/nav'
import Home from './page/home'
import BookingForm from './page/booking'
import BookingConfirmation from './page/confirmation'
import DestinationDetails from './page/detailsPage'
import About from './page/about'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
         <Route path="/booking" element={<BookingForm/>} />
        
        <Route path="/confirmation" element={<BookingConfirmation/>} />
        <Route path="/detailsPage/:id" element={<DestinationDetails/>} />
                <Route path="/about" element={<About/>} />
      </Routes>
      
    </Router>
  )
}

export default App
