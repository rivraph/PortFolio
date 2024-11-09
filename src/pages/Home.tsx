import '../styles/Home.css'
import '../index.css'
import Main2 from '../components/Main2';
import Header from '../components/header';
import Footer from '../components/Footer';
import datas from '../datas/datas.json';
import { useEffect } from'react';
import { useState } from 'react';


function Home() {
  const [data, setData] = useState ({});
  
  useEffect ( () => { setData(datas); 
      }, []);
 
  return (
    <>
    <Main2 />
    <Footer />
    </>
  );
}

export default Home;