import React, { useState } from 'react'

const Display = () => {
  const [codehex, setCodeHex] = useState("#03030a");
  const [codergb, setCodeRgb] = useState();
  const [select, setSelect] = useState("");

  const handleHex = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexno = "#";

    for (let i = 0; i < 6; i++) {
      hexno += hex[Math.floor(Math.random() * hex.length)];
    }
    setCodeHex(hexno);
    setSelect(false);
    document.body.style = `background:${hexno};`;
  }
  const handleRgb = () => {
    let min = 0;
    let max = 255;
    let diff = max - min;
    let r = Math.floor(Math.random() * diff) + min;
    let g = Math.floor(Math.random() * diff) + min;
    let b = Math.floor(Math.random() * diff) + min;
    setCodeRgb(`rgb(${r},${g}, ${b})`);
    setSelect(true);
    document.body.style = `background:rgb(${r},${g}, ${b});`;
  }

  return (
    <>
      <div className='container'>
        <div className='output'>
          <h1>{select ? codergb : codehex}</h1>
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