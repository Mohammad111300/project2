import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState("");
  
  const exuse = (forwhat) => {
    axios.get(`https://excuser-three.vercel.app/v1/excuse/${forwhat}/`).then((res) => {
      setData(res.data[0].excuse);
    });
  };



  return (
    <div className="App">
      <button onClick={() => {exuse("party")}}>Party</button>
      <button onClick={() => {exuse("family")}}>Family</button>
      <button onClick={() => {exuse("office")}}>Office</button>
      <p>{data}</p>
    </div>
  );
}


export default App;
