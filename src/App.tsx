import { Routes, Route } from 'react-router-dom'
import {Home} from './pages/Home'
import {Aboutus} from './pages/Aboutus'
import {Commerce} from "./pages/Commerce.tsx";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Aboutus />} />
        <Route path="/commerce" element={<Commerce/>} />
      {/* <Route path="/contacts" element={<Contacts />} /> */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  )
}
