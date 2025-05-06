import { useTranslation } from 'react-i18next';

export function Overview() {
    const { t } = useTranslation();
    
    return (
        <div className="overview">
            <section className="hero-section" style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.59)), url("Hero.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                padding: '80px 0',
                minHeight: '400px'
            }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
                    <div className="content-wrapper" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className="left-content" style={{ maxWidth: '50%' }}>
                            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                                {t('aboutus.overview.title')}
                            </h1>
                            <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                                {t('aboutus.overview.subtitle')}
                            </p>
                        </div>
                        <div className="stats" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div className="stat-item">
                                <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{t('aboutus.overview.stats.years')}</div>
                                <div style={{ fontSize: '0.9rem', opacity: '0.8' }}>{t('aboutus.overview.stats.yearsSubtitle')}</div>
                            </div>
                            <div className="stat-item">
                                <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{t('aboutus.overview.stats.volume')}</div>
                                <div style={{ fontSize: '0.9rem', opacity: '0.8' }}>{t('aboutus.overview.stats.volumeSubtitle')}</div>
                            </div>
                            <div className="stat-item">
                                <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{t('aboutus.overview.stats.projects')}</div>
                                <div style={{ fontSize: '0.9rem', opacity: '0.8' }}>{t('aboutus.overview.stats.projectsSubtitle')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}