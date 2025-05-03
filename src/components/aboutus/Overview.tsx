export function Overview() {
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
                                NAK  - "Nur Astana Kurylys"
                            </h1>
                            <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                                өзін қазақстандық нарықта байсалды және сенімді құрылыс салушы ретінде танытқан қарқынды дамып келе жатқан құрылыс компаниясы.
                            </p>
                        </div>
                        <div className="stats" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div className="stat-item">
                                <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>17 лет</div>
                                <div style={{ fontSize: '0.9rem', opacity: '0.8' }}>На рынке строительства</div>
                            </div>
                            <div className="stat-item">
                                <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>2 млн м²</div>
                                <div style={{ fontSize: '0.9rem', opacity: '0.8' }}>Объем построенного жилья</div>
                            </div>
                            <div className="stat-item">
                                <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>250 проектов</div>
                                <div style={{ fontSize: '0.9rem', opacity: '0.8' }}>В активе компании</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}