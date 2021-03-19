import './body.css';
import LinksSlider from './LinksSlider';

function Body() {
    //TODO get from API
    const map = 'https://lh3.googleusercontent.com/proxy/MBnWu_oDMJagmvS086n83JEzp2Itivig_G5wrxL4MQtxJHQ4xti-M-uurODDpchyx5KCmHJb_Ty24cAAg_3wm1PakQ';
    //TODO get from API
    const sliderContent = {
        0: {
            title: 'Наш сайт',
            qrLink: 'https://www.kaspersky.com/content/en-global/images/repository/isc/2020/9910/a-guide-to-qr-codes-and-how-to-scan-qr-codes-2.png',
            description: "Инмформационный портал opodvor.ru: читайте главные новости ТЦ О!Подворья, узнавайте информацию о наших кафе и магазинах, получайте анонсы мероприятий"
        },
        1: {
            title: 'Доствка продуктов на дом',
            qrLink: 'https://www.kaspersky.com/content/en-global/images/repository/isc/2020/9910/a-guide-to-qr-codes-and-how-to-scan-qr-codes-2.png',
            description: "Инмформационный портал opodvor.ru: читайте главные новости ТЦ О!Подворья, узнавайте информацию о наших кафе и магазинах, получайте анонсы мероприятий"
        }
    };
    return (
        <div className="body">
            <div className="body__slider links-slider">
                <LinksSlider content={sliderContent}/>
            </div>
            <div className="body__map">
                <img src={map} alt='map'></img>
            </div>
        </div>
    );
}

export default Body;