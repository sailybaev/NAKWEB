// filepath: /Users/sailybaev/Documents/projects/react-ts-app/src/App.tsx
import { Route, Routes } from 'react-router-dom'
import { Aboutus } from './pages/Aboutus'
import { AnsauForm } from './pages/AnsauForm.tsx'
import { Contacts } from './pages/Contacts'
import { Home } from './pages/Home'
import { ResidentialComplex } from './pages/ResidentialComplex.tsx'

export function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<Aboutus />} />
			<Route path='/commerce' element={<Home />} />
			<Route path='/campaigns' element={<Home />} />
			<Route path='/contacts' element={<Contacts />} />
			<Route path='/residential/:complexId' element={<ResidentialComplex />} />
			<Route path='/ansau-form' element={<AnsauForm />} />
			<Route path='*' element={<div>404 Not Found</div>} />
		</Routes>
	)
}
