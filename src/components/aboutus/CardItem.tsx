import { useTranslation } from 'react-i18next';

interface CardItemProps {
    title: string;
    description: string;
    imageUrl: string;
}

export function CardItem({ title, description, imageUrl }: CardItemProps) {
    const { t } = useTranslation();
    
    return (
        <div className="card" style={{ 
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        }}>
            <div className="card-image" style={{ 
                height: '200px',
                overflow: 'hidden'
            }}>
                <img 
                    src={imageUrl} 
                    alt={title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </div>
            
            <div className="card-content" style={{ 
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                flex: 1
            }}>
                <h3 style={{ 
                    fontSize: '1.25rem',
                    marginBottom: '12px',
                    fontWeight: 'bold'
                }}>{title}</h3>
                
                <p style={{ 
                    fontSize: '0.9rem',
                    lineHeight: '1.5',
                    color: '#555',
                    marginBottom: '20px',
                    flex: 1
                }}>{description}</p>
                
                <button style={{ 
                    padding: '8px 24px',
                    backgroundColor: 'transparent',
                    border: '1px solid #333',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    alignSelf: 'flex-start'
                }}>
                    {t('aboutus.services.moreButton')}
                </button>
            </div>
        </div>
    );
}