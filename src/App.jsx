
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React,{useState} from 'react'


function App() {

  const[mostrar,setMostrar]=useState(false);
  const[contador,setContador]=useState(0);
    
  const togglefunction =()=>{
    setMostrar(!mostrar);
};

const incrementa = () => {
  setContador((prevContador) => prevContador + 1);
};

const decrementa = () => {
  setContador((prevContador) => prevContador - 1);
};

  return (
    <>
    <div className={`cardContainer ${mostrar ?'active':''}`}>
      <div className='ImgContainer'>
          <p>Aqui va la imagen del producto</p>
          <p>*****</p>
          <p>Nombre del producto</p>
          <button onClick={togglefunction}>Mostrar mas</button>
      </div>
      <div className={`DesContainer ${mostrar ?'active':''}`}>
         <p>Este es el texto de uno de los productos</p>
         <div className='colors'>
          <p>colors</p>
          <button className='red'></button>
          <button className='blue'></button>
          <button className='nude'></button>
          <button className='pink'></button>
         </div>
         <div className='cantidad'>
          <button onClick={decrementa}>-</button>
            <p>{contador}</p>
          <button onClick={incrementa}>+</button>
         </div>
         <button>Agregar al carrito</button>
         <button>Comprar</button>
      </div>
    </div>
    </>
  )
}

export default App
