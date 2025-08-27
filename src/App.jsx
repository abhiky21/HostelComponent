import { useState } from 'react'
import './App.css'
import Form from './Component/Form'
import ContactUs from './Component/ContactUs'
import Navbar from './Component/Navbar'
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route exact path='/'  element={<Form title="Submit Your Details"/>}/>
          <Route exact path='/contactus'  element={<ContactUs />}/>
        </Routes>
    </Router>
  )
}

export default App
