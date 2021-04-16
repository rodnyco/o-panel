import { useState, useEffect } from "react";
import './body.css';
import LinksSlider from './LinksSlider';
import MapSlider from './MapSlider';

function Body() {
    const [maps, setMaps] = useState([]);
    const [banners, setBanners] = useState([]);

    const getMaps = () => {
        fetch("https://opodvor.ru/o-panel/api.php?entity_type=map&key="+process.env.REACT_APP_SERVER_KEY, {
                method: "GET"
            })
            .then(res => res.json())
            .then((result) => {
                setMaps(result.data);
            }
        )
    };


    const getBanners = () => {
        fetch("https://opodvor.ru/o-panel/api.php?entity_type=banner&key="+process.env.REACT_APP_SERVER_KEY, {
            method: "GET"
            }).then(res => res.json()).then(
            (result) => {
            setBanners(result.data);
            }
        )
    };
    

    useEffect(() => {
        getMaps();
        getBanners();
        let apiInterval = setInterval(() => {
                getMaps();
                getBanners();
            }, 5000);
        return () => clearInterval(apiInterval);
    }, [])
    
    return (
        <div className="body">
            <div className="body__slider links-slider">
                <LinksSlider content={banners}/>
            </div>
            <div className="body__map">
                {/* <h2></h2> */}
                <MapSlider content={maps}/>
            </div>
        </div>
    );
}

export default Body;