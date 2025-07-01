import { useParams } from 'react-router-dom'
import { AmenitiesSection } from '../components/residential/AmenitiesSection'
import { ApartmentSlider } from '../components/residential/ApartmentSlider'
import { ContactSection } from '../components/residential/ContactSection'
import { FeaturesSection } from '../components/residential/FeaturesSection'
import { GallerySection } from '../components/residential/GallerySection'
import { HeroSection } from '../components/residential/HeroSection'
import { LocationSection } from '../components/residential/LocationSection'
import { OverviewSection } from '../components/residential/OverviewSection'
import { residentialComplexes } from '../components/residential/residentialConfig'

export function ResidentialPage() {
	const { id } = useParams<{ id: string }>()
	const complex = residentialComplexes.find(c => c.id === id)

	if (!complex) {
		return (
			<div className='min-h-screen flex items-center justify-center bg-gray-100'>
				<div className='text-center'>
					<h1 className='text-4xl font-bold text-gray-900 mb-4'>
						Complex Not Found
					</h1>
					<p className='text-gray-600 mb-8'>
						The residential complex you are looking for could not be found.
					</p>
					<a
						href='/'
						className='inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'
					>
						Back to Home
					</a>
				</div>
			</div>
		)
	}

	return (
		<main className='min-h-screen'>
			<HeroSection complex={complex} />
			<OverviewSection complex={complex} />
			{/* <AboutSection complex={complex} /> */}
			<LocationSection complex={complex} />
			<FeaturesSection complex={complex} />
			<GallerySection complex={complex} />
			<AmenitiesSection complex={complex} />
			<ApartmentSlider complex={complex} />
			<ContactSection complex={complex} />
		</main>
	)
}
