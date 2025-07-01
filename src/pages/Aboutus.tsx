import { About } from '../components/aboutus/About'
import { Features } from '../components/aboutus/Features'
import { Overview } from '../components/aboutus/Overview'
import { MainLayout } from '../layouts/MainLayout'
export function Aboutus() {
	return (
		<MainLayout>
			<Overview />
			<About />
			{/* <Cards /> */}
			<Features />
			{/* <Person /> */}
		</MainLayout>
	)
}
