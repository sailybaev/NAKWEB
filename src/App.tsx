// filepath: /Users/sailybaev/Documents/projects/react-ts-app/src/App.tsx
import { Routes, Route } from 'react-router-dom'
import {Home} from './pages/Home'
import {Aboutus} from './pages/Aboutus'
import {Commerce} from "./pages/Commerce.tsx";
import {ResidentialComplex} from "./pages/ResidentialComplex.tsx";
import { Campaigns } from './pages/Campaigns.tsx';
import { Contacts } from './pages/Contacts';
import AdminPanel from './components/admin/AdminPanel';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/commerce" element={<Commerce/>} />
      <Route path="/campaigns" element={<Campaigns/>} />
      <Route path="/contacts" element={<Contacts/>} />
      <Route path="/residential/:complexId" element={<ResidentialComplex/>} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  )
}