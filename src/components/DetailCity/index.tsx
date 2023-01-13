import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux';

const DetailCity = ()=> {
    const {cityData} = useSelector((state:AppState)=>state.app)
return (
    <div className='container contenedor'>
        <div className="card">
            {cityData && 
            <div className="card-body">
                <div>
                    <h1 className='card-title'>{cityData.name}</h1>
                    <p className='card-text'>Wind Speed: {cityData.wind.speed}</p>
                    <p className='card-text'>Weather: {cityData.weather.length && cityData.weather[0].main}</p>
                    <p className='card-text'>Description: {cityData.weather.length && cityData.weather[0].description}</p> 
                    <p className='card-text'>Humidity: {cityData.main.humidity && cityData.main.humidity}</p> 
                    <p className='card-text'>Temp: {cityData.main.temp && cityData.main.temp}</p> 

                </div>
            </div>
            }
        </div>
    </div>             
 
    )
}
export default DetailCity;
