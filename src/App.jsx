import React from 'react';
import './App.css'

function App() {


  return (
    <div className="Parentbox">

    </div>
  )
}

function FotoProduct() {
        <div className="foto">
    <img src="sepatu2.jpg"  />
      </div>
}



function ProductInfo () {
    const category = "RUNNING";
  const name = "White sports shoes";
  const harga = "700.000";

  return(
  <div className="Deskripsi">
  <p className='Cate'>{category}</p>
  <h1 className="Title">{name}</h1>
  <p className='Price'>IDR {harga}</p>
  <p className="Info">
    One of the most recognizable shoes in the AJ collection, the Air Jordan 3 Retro features lightweight, visible cushioning just like the original from '88. Signature details and materials celebrate the game-changing icon.
  </p>
</div>
  )


  
}

export default App
