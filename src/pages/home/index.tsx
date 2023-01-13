import React from 'react';
import DetailCity from '../../components/DetailCity';
import Loader from '../../components/Loader';
import Navbar from '../../components/Navbar';

import { useSelector } from 'react-redux';
import { AppState } from '../../redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = ()=> {
  const {loading} = useSelector((state:AppState)=>state.app)
  return (
    <div className='container'>
      <div className='d-flex justify-content-center'>
        {loading ? <Loader/> : 
        <div>
          <Navbar/>
          <DetailCity/>
        </div>
        }
      </div>

    </div>
  )
}

export default Home;