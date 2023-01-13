import React, { useState } from 'react';
import {searchCity,setCity } from '../../redux/actions/appAtions';
import { useDispatch } from 'react-redux';

const Navbar = ()=> {
  const [nameCity, setNameCity] = useState<string>("")
  const dispatch  = useDispatch()

  const handlePress =()=>{
    if(nameCity.length){
      dispatch(searchCity(nameCity))
    }else{
      alert("empty field")
      dispatch(setCity(null))
    }
  }
  return (
    <div className='container border rounded-pill  d-flex '>
      <div className='row g-2 d-flex w-auto p-3'>
        <div className='col-7 d-flex    justify-content-center'>
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