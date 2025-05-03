import { Routes, Route } from 'react-router-dom'
import {Home} from '../pages/Home'
import {Aboutus} from '../pages/Aboutus'
import {Services} from '../pages/Services'
import {Contacts} from '../pages/Contacts'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Aboutus />} />
      {/* <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contacts />} /> */}
    </Routes>
  )
}
