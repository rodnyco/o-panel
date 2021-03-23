import './body.css';
import LinksSlider from './LinksSlider';
import MapSlider from './MapSlider';

function Body() {
    //TODO get from API
    const mapContent = [
        {
            id: 0,
            title: 'Карта первый этаж',
            link: 'https://opodvor.ru/upload/o-panel/map.jpg'
        },
        {
            id: 0,
            title: 'Карта второй этаж',
            link: 'https://opodvor.ru/upload/o-panel/map.jpg'
        },
    ];
    //TODO get from API
    const sliderContent = [
        {
            id: 0,
            title: 'Банер 1',
            link: 'https://opodvor.ru/upload/iblock/e9f/e9f0e4e85de12dc4fc37ee4c5e375e76.jpg'
        },
        {
            id: 1,
            title: 'Банер 2',
            link: 'https://opodvor.ru/upload/iblock/e9f/e9f0e4e85de12dc4fc37ee4c5e375e76.jpg'
        },
    ];
    return (
        <div className="body">
            <div className="body__slider links-slider">
                <LinksSlider content={sliderContent}/>
            </div>
            <div className="body__map">
                <h2>Карта ТК О!Подворье</h2>
                <MapSlider content={mapContent}/>
            </div>
        </div>
    );
}

export default Body;