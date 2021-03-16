import './body.css';
import LinksSlider from './LinksSlider';

function Body() {
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
                map
            </div>
        </div>
    );
}

export default Body;