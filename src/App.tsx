import './App.css'
import Main2 from '../src/components/Main2';
import Header from '../src/components/header';
import Footer from '../src/components/Footer';
import datas from '../src/datas/datas.json';
import { useEffect } from'react';
import { useState } from 'react';


function App() {
  const [data, setData] = useState ({});
  
  useEffect ( () => { setData(datas); 
      }, []);
 
  return (
    <>
    <Header datas = {data} />
    <Main2 />
    <Footer />
    </>
  );
}

export default App
