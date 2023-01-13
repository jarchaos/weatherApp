import React, { useState } from 'react';
import {searchCity } from '../../redux/actions/appAtions';
import { useDispatch } from 'react-redux';

const Navbar = ()=> {
  const [nameCity, setNameCity] = useState<string>("")
  const dispatch  = useDispatch()

  const handlePress =()=>{
    dispatch(searchCity(nameCity))
  }
  return (
    <div className='container'>
      <div className='row g-2'>
        <div className='col-7'>
          <input  className='input-group flex-nowrap' value={nameCity} onChange={(e)=>setNameCity(e.target.value)} placeholder='Type the city name'/>
        </div>
        <div className='col-5'>
        <button className='btn btn-primary' onClick={handlePress}>Search <i className="fa-regular fa-magnifying-glass"></i></button>

        </div>
    </div>
    </div>
    
  )
}
export default Navbar;