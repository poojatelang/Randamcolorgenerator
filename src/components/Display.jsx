import React, { useState } from 'react'

const Display = () => {
    const [codehex,setCodeHex]=useState("#03030a");
    const [codergb,setCodeRgb]=useState();
    const [select,setSelect]=useState("");

    const handleHex=()=>{
        let randamno=100000 + Math.floor(Math.random() * 900000);
        let hexno="#"+randamno
        setCodeHex(hexno);
        setSelect(false);
        document.body.style = `background:${hexno};`;
    }
    const handleRgb=()=>{
        let min=0;
        let max=255;
        let diff=max-min;
        let r=Math.floor(Math.random()*diff)+min;
        let g=Math.floor(Math.random()*diff)+min;
        let b=Math.floor(Math.random()*diff)+min;
        setCodeRgb(`rgb(${r},${g}, ${b})`);
        setSelect(true);
        document.body.style = `background:rgb(${r},${g}, ${b});`;
    }
   
  return (
    <>
    <div className='container'>
        <div className='output'> 
            <h1>{select?codergb:codehex}</h1>
        </div>
        <div className='btn'>
         <button onClick={handleRgb}>RGB Code</button>
          <button onClick={handleHex}>Hex Code</button> 
        </div>
    </div>
    </>
  )
}

export default Display