import {Header} from '../reusable/Header';
import {Paragraph} from '../reusable/Paragraph';
import { useTranslation } from 'react-i18next';

export function About() {
    const { t } = useTranslation();
    
    return (
        <section className="about-section" style={{ background: '#f5f5f7', padding: '60px 0' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
                    <Header title={t('aboutus.about.title')} />
                    <Paragraph text={t('aboutus.about.description')} />
                </div>
        </section>
    );
}