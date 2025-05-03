import { Routes, Route } from 'react-router-dom'
import {Home} from './pages/Home'
import {Aboutus} from './pages/Aboutus'
import {Contacts} from './pages/Contacts'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Aboutus />} />
      {/* <Route path="/contacts" element={<Contacts />} /> */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  )
}
