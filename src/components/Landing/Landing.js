import React, {useState} from "react";
import cities from "../../sample-cities";
import './Landing.css';

const Landing = (props) => {

    // state = {
    //     display: false,
    //     city: '',
    //     url: ''
    // };

    const [display, toggleDisplay] = useState(false);
    const [city, setCity] = useState('');
    const [url, setUrl] = useState('');

    const displayList = () => {
        toggleDisplay(!display);
    }

    const getCity = (cityEl) => {
        const {city, url} = cityEl;
        setCity(city);
        setUrl(url)
        toggleDisplay(false);
    }

    const goToCity = () => {
        props.history.push(`/order/${url}`, city);
    }

    return (
        <div className="city_select">
            <div onClick={displayList}  className="city_select_top">
                <div className="city_select_top-header">
                    { city ? city : "Виберіть місто" }
                </div>

                <div className="arrow_picker">
                    <div className="arrow_picker-up"></div>
                    <div className="arrow_picker-down"></div>
                </div>
            </div>

            { display 
                ?  <div className="city_select_bottom">
                        <ul>
                            {cities.map(city => {
                                return <li onClick={() => getCity(city)} key={city.id}>{city.city}</li>;
                            })}
                        </ul>
                   </div> 
                : null }

            { city && !display 
               ? <button onClick={goToCity} className="violet_btn">Перейти</button>
               : null }
        </div>
    );
}

export default Landing;
