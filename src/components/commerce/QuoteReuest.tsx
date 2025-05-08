import { useTranslation } from 'react-i18next';

export function QuoteReuest() {
    const { t } = useTranslation();
    
    return (
        <section className="py-16 pb-32 bg-gray-900" id='quote'>
            <div className="container mx-auto px-4 max-w-2xl text-white bg-gray-800 py-16 px-16 rounded-lg">
                <h2 className="text-3xl font-bold mb-8">{t('commerce.quoteForm.title')}</h2>
                <form className="space-y-6">
                    <div>
                        <label className="block mb-2 font-medium">{t('commerce.quoteForm.nameLabel')}</label>
                        <input type="text" className="bg-gray-100 w-full p-3 rounded-md text-black" />
                    </div>
                    <div>
                        <label className="block mb-2 font-medium">{t('commerce.quoteForm.phoneLabel')}</label>
                        <input type="email" className="bg-gray-100 w-full p-3 rounded-md text-black" />
                    </div>
                    <div>
                        <label className="block mb-2 font-medium">{t('commerce.quoteForm.detailsLabel')}</label>
                        <textarea className="bg-gray-100 w-full p-3 rounded-md h-32 text-black"></textarea>
                    </div>
                    <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700">
                        {t('commerce.quoteForm.submitButton')}
                    </button>
                </form>
            </div>
        </section>
    )
}