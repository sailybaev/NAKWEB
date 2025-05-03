import {Header} from '../reusable/Header';
import {Paragraph} from '../reusable/Paragraph';
export function About() {
    return (
        <section className="about-section" style={{ background: '#f5f5f7', padding: '60px 0' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
                    <Header title = "О Нас" />
                    <Paragraph text = "«Nur Astana Kurylys» компаниясы – бұл қызмет саласына тек тұрғын үй құрылысы ғана емес, сонымен бірге өзінің өндірістік базасын басқару, HoReCa саласында объектілерді тұрғызу, тендерлік жобалар, бизнес-орталықтарды салу, сондай-ақ сауда және кеңсе бөлмелерін жалдау қызметі кіретін көп пробейінді холдинг" />
                </div>

        </section>
    );
}