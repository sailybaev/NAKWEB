import { useTranslation } from 'react-i18next';
import CountUp from '../animations/CountUp'
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
                    <div className="content-wrapper" style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        flexDirection: 'row'
                    }}>
                        <div className="left-content" style={{ 
                            maxWidth: '50%'
                        }}>
                            <h1 style={{ 
                                fontSize: '2.5rem', 
                                marginBottom: '1rem',
                            }}>
                                {t('aboutus.overview.title')}
                            </h1>
                            <p style={{ 
                                fontSize: '1rem', 
                                lineHeight: '1.6',
                            }}>
                                {t('aboutus.overview.subtitle')}
                            </p>
                            <div className="stat-item" style={{ 
                                marginTop: '6rem'
                            }}>
                                <div style={{ 
                                    fontSize: '2.5rem', 
                                    fontWeight: 'bold', 
                                    color: '#fff',
                                }}>
                                    <CountUp
                                        from={0}
                                        to={50}
                                        separator=","
                                        direction="up"
                                        duration={1}
                                        className="count-up-text"
                                    />
                                    {t('aboutus.overview.stats.clients')}
                                </div>
                                <div style={{ 
                                    fontSize: '0.9rem', 
                                    opacity: '0.8',
                                }}>{t('aboutus.overview.stats.clientsSubtitle')}</div>
                            </div>
                        </div>
                        <div className="stats" style={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            gap: '2rem'
                        }}>
                            <div className="stat-item">
                                <div style={{ 
                                    fontSize: '2.5rem', 
                                    fontWeight: 'bold',
                                }}>
                                    <CountUp
                                        from={0}
                                        to={19}
                                        separator=","
                                        direction="up"
                                        duration={1}
                                        className="count-up-text"
                                    />
                                    {t('aboutus.overview.stats.years')}
                                </div>
                                <div style={{ 
                                    fontSize: '0.9rem', 
                                    opacity: '0.8',
                                }}>{t('aboutus.overview.stats.yearsSubtitle')}</div>
                            </div>
                            <div className="stat-item">
                                <div style={{ 
                                    fontSize: '2.5rem', 
                                    fontWeight: 'bold',
                                }}>
                                    <CountUp
                                        from={0}
                                        to={2}
                                        separator=","
                                        direction="up"
                                        duration={1}
                                        className="count-up-text"
                                    />
                                    {t('aboutus.overview.stats.volume')}
                                </div>
                                <div style={{ 
                                    fontSize: '0.9rem', 
                                    opacity: '0.8',
                                }}>{t('aboutus.overview.stats.volumeSubtitle')}</div>
                            </div>
                            <div className="stat-item">
                                <div style={{ 
                                    fontSize: '2.5rem', 
                                    fontWeight: 'bold',
                                }}>
                                    <CountUp
                                        from={0}
                                        to={250}
                                        separator=","
                                        direction="up"
                                        duration={1}
                                        className="count-up-text"
                                    />
                                    {t('aboutus.overview.stats.projects')}
                                </div>
                                <div style={{ 
                                    fontSize: '0.9rem', 
                                    opacity: '0.8',
                                }}>{t('aboutus.overview.stats.projectsSubtitle')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}