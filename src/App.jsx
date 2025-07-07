import React from 'react';
import './App.css'
import ReviewItems from './Reviews';
import PropTypes from 'prop-types';


function App() {


  return (
    <div className="Parentbox">
      <div className="ProductArea">
      <FotoProduct  />
      <ProductInfo category = "RUNNING" name = "White sports shoes" harga = "700.000"  isDiscount = "yes" discount = {50} /> {/**conditional rendering */}
      </div>

      
      <ReviewItems />
    </div>

  )
}


function FotoProduct() {

  return (
      <div className="foto">
       <img src="/sepatu2.jpg"  />
      </div>
  )

}

function CheckDiscount(props) {
  const {isDiscount, discount} = props;
  if(isDiscount == "yes"){
    return(
      <p>Discount {discount}% Off</p>
    );
  }else if(isDiscount == "comming") {
    return(
      <p>Akan Ada discount</p>
    );
  }else{
    return(
      <p>Maaf blm ada discount</p>
    );
  }
}



function ProductInfo (props) {
  const {category, name, harga, isDiscount, discount} = props;
  const Benefits = ["Tidak Kusut Terkena Air", "Bahan Lebih Halus", "Tidak Gerah"];  {/**loops.map */}
  const listBenefits = Benefits.map((itemBenefit) =>
    <li key={itemBenefit} >{itemBenefit}</li>
  );
  

  return(
  <div className="Deskripsi">
  <p className='Cate'>{category}</p>
  <h1 className="Title">{name}</h1>
  <p className='Price'>IDR {harga}</p>
  <CheckDiscount  isDiscount = {isDiscount}  discount= {discount}/>
  <p className="Info">
    One of the most recognizable shoes in the AJ collection, the Air Jordan 3 Retro features lightweight, visible cushioning just like the original from '88. Signature details and materials celebrate the game-changing icon.
  </p>

  <ul>
    {listBenefits}
  </ul>
  <a onClick={(e) => TambahCart(name, e)} href="#"> Add to Cart</a>
</div>
  ) 
}

function TambahCart(e) {
  return console.log("Tambah Product " + e)
}

CheckDiscount.PropTypes = {
  discount: PropTypes.number.isRequired
};

export default App
