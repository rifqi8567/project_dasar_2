import React from 'react';
import './App.css'

function App() {


  return (
    <div className="Parentbox">


      <FotoProduct  />
      <ProductInfo category = "RUNNING" name = "White sports shoes" harga = "700.000" />
    </div>
  )
}

function FotoProduct() {

  return (
      <div className="foto">
       <img src="sepatu2.jpg"  />
      </div>
  )

}






function ProductInfo (props) {
  const {category, name, harga} = props;
  

  return(
  <div className="Deskripsi">
  <p className='Cate'>{category}</p>
  <h1 className="Title">{name}</h1>
  <p className='Price'>IDR {harga}</p>
  <p className="Info">
    One of the most recognizable shoes in the AJ collection, the Air Jordan 3 Retro features lightweight, visible cushioning just like the original from '88. Signature details and materials celebrate the game-changing icon.
  </p>
  <a onClick={(e) => TambahCart(name, e)} href="#"> Add to Cart</a>
</div>
  ) 
}

function TambahCart(e) {
  return console.log("Tambah Product " + e)
}

export default App
