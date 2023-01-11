import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from './redux';
import { changeValueAction } from './redux/actions/appAtions';

const App=()=> {
  const data = useSelector((state:AppState)=>state.app)
  const [name, setname] = useState<string>("")
  const dispatch  =useDispatch()

  const handlepress =()=>{
    dispatch(changeValueAction(name))
  }
  return (
    <div className="App">
      <input  value={name} onChange={(e)=>setname(e.target.value)}/>
      <button onClick={handlepress}>
        PRESS
      </button>
      
        {data.token}
       
    </div>
  );
}

export default App;
