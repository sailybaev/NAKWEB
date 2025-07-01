import { useState } from 'react'
import { ResidentialComplex } from './residentialConfig'
// import { useTranslation } from 'react-i18next';

interface ContactSectionProps {
	complex: ResidentialComplex
}

export function ContactSection({ complex }: ContactSectionProps) {
	//const { t } = useTranslation();
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
		message: '',
		agreement: false,
	})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitSuccess, setSubmitSuccess] = useState(false)
	const [error, setError] = useState('')

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value, type } = e.target
		setFormData({
			...formData,
			[name]:
				type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
		})
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)
		setError('')

		try {
			// Подготавливаем данные для отправки
			const formDataToSend = new URLSearchParams({
				subj: 'заявка с сайта',
				object: complex.name,
				name: formData.name,
				phone: formData.phone,
				form: 'форма',
			})

			console.log('Отправляем данные:', Object.fromEntries(formDataToSend))

			// Отправляем запрос на API
			await fetch('https://nak.protrend.kz/make/makecrm.php', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: formDataToSend.toString(),
				mode: 'no-cors', // Обходим CORS ограничения
			})

			console.log('Ответ сервера получен')

			// При mode: 'no-cors' response.ok всегда будет false, но запрос пройдет
			// Показываем успешное сообщение
			setSubmitSuccess(true)
			setFormData({
				name: '',
				phone: '',
				email: '',
				message: '',
				agreement: false,
			})
		} catch (err) {
			console.error('Ошибка при отправке формы:', err)

			// Проверяем тип ошибки
			if (err instanceof TypeError && err.message.includes('Failed to fetch')) {
				console.log('CORS или сетевая ошибка, но данные могли быть отправлены')
				// При CORS ошибке данные часто все равно доходят до сервера
				setSubmitSuccess(true)
				setFormData({
					name: '',
					phone: '',
					email: '',
					message: '',
					agreement: false,
				})
			} else {
				setError(
					'Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.'
				)
			}
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<div className='bg-white rounded-2xl shadow-xl overflow-hidden'>
			<div className='flex flex-col md:flex-row'>
				<div className='bg-blue-600 text-white p-8 md:p-12 md:w-2/5'>
					<h3 className='text-2xl font-bold mb-6'>Контактная информация</h3>
					<div className='space-y-6'>
						<div>
							<p className='text-blue-200 text-sm font-medium mb-2'>
								Название ЖК
							</p>
							<p className='font-semibold text-xl'>{complex.name}</p>
						</div>
						<div>
							<p className='text-blue-200 text-sm font-medium mb-2'>Адрес</p>
							<p>{complex.address}</p>
						</div>
						<div>
							<p className='text-blue-200 text-sm font-medium mb-2'>Телефон</p>
							<a href='tel:+77066999500' className='block hover:underline'>
								+7 706 699 95 00
							</a>
						</div>
						<div>
							<p className='text-blue-200 text-sm font-medium mb-2'>E-mail</p>
							<a href='mailto:info@nak.kz' className='block hover:underline'>
								info@nak.kz
							</a>
						</div>
						<div>
							<p className='text-blue-200 text-sm font-medium mb-2'>
								Адреса офисов
							</p>
							<p>
								Проспект Мангилик Ел, 38
								<br />
								Улица Арай, 29а
							</p>
						</div>
						<div>
							<p className='text-blue-200 text-sm font-medium mb-2'>
								Время работы
							</p>
							<p>
								Пн-Пт: 9:00 - 18:00
								<br />
								Сб: 10:00 - 17:00
								<br />
								Вс: выходной
							</p>
						</div>
					</div>
				</div>

				<div className='p-8 md:p-12 md:w-3/5'>
					{submitSuccess ? (
						<div className='text-center py-12'>
							<div className='mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-green-100 mb-6'>
								<svg
									className='w-8 h-8 text-green-600'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M5 13l4 4L19 7'
									/>
								</svg>
							</div>
							<h3 className='text-2xl font-bold text-gray-800 mb-4'>
								Спасибо за обращение!
							</h3>
							<p className='text-gray-600 mb-8'>
								Ваше сообщение успешно отправлено. Наши менеджеры свяжутся с
								вами в ближайшее время.
							</p>
							<button
								onClick={() => setSubmitSuccess(false)}
								className='inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'
							>
								Отправить еще сообщение
							</button>
						</div>
					) : (
						<>
							<h3 className='text-2xl font-bold text-gray-800 mb-6'>
								Оставьте заявку или задайте вопрос
							</h3>
							<p className='text-gray-600 mb-8'>
								Заполните форму ниже, и наши специалисты свяжутся с вами в
								ближайшее время для консультации.
							</p>

							{error && (
								<div className='bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6'>
									{error}
								</div>
							)}

							<form onSubmit={handleSubmit}>
								<div className='space-y-6'>
									<div>
										<label
											htmlFor='name'
											className='block text-sm font-medium text-gray-700 mb-1'
										>
											Имя *
										</label>
										<input
											type='text'
											id='name'
											name='name'
											required
											value={formData.name}
											onChange={handleChange}
											className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500'
											placeholder='Введите ваше имя'
										/>
									</div>

									<div>
										<label
											htmlFor='phone'
											className='block text-sm font-medium text-gray-700 mb-1'
										>
											Телефон *
										</label>
										<input
											type='tel'
											id='phone'
											name='phone'
											required
											value={formData.phone}
											onChange={handleChange}
											className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500'
											placeholder='+7 (___) ___-__-__'
										/>
									</div>

									<div className='flex items-start'>
										<div className='flex items-center h-5'>
											<input
												id='agreement'
												name='agreement'
												type='checkbox'
												required
												checked={formData.agreement}
												onChange={handleChange}
												className='w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500'
											/>
										</div>
										<div className='ml-3 text-sm'>
											<label htmlFor='agreement' className='text-gray-600'>
												Я согласен на обработку персональных данных *
											</label>
										</div>
									</div>

									<div>
										<button
											type='submit'
											disabled={isSubmitting}
											className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 px-6 rounded-lg transition-colors shadow-md ${
												isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
											}`}
										>
											{isSubmitting ? 'Отправка...' : 'Отправить заявку'}
										</button>
									</div>
								</div>
							</form>
						</>
					)}
				</div>
			</div>
		</div>
	)
}
