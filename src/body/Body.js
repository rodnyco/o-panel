import './body.css';
import LinksSlider from './LinksSlider';

function Body() {
    //TODO get from API
    const map = 'https://lh3.googleusercontent.com/proxy/onXYxLxpHV_8zzIiwdUKSYDUcC8_GLmxNM6_yoanawm_6958qsku6Y4RbQK26LU4WKvAXe4ZrGlwk7IqDZhXHDmYFg';
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
                <h2>Карта ТЦ О!Подворье</h2>
                <img src={map} alt='map'></img>
            </div>
        </div>
    );
}

export default Body;