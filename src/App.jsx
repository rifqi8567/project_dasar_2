import React from 'react';
import './App.css'

function App() {


  return (
    <div className="Parentbox">
      <div className="ProductArea">
      <FotoProduct  />
      <ProductInfo category = "RUNNING" name = "White sports shoes" harga = "700.000"  isDiscount = "comming"/> {/**conditional rendering */}
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

function ReviewItems() {
  const  users = [
    {
      "id": 1,
      "name": "Ahmad Yani",
      "review" :"Harga murah dan kualitasnya bagus.",
      "img"  : "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"


    },
    {
      "id": 2,
      "name": "Ahmad Aldo",
      "review" :"Lumayan boleh pakai.",
      "img"  : "https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg"

    },
    {
      "id": 3,
      "name": "Ahmad Zaki",
      "review" :"Bagus boleh lah.",
      "img"  : "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"

    }
  ];
  const listReview = users.map((itemReview) =>
    <div className="Item">
        <img src={itemReview.img} alt="User Profile" />
        <div className="User">
          <h3>{itemReview.name}</h3>
          <p>{itemReview.review}</p>
        </div>
      </div>
  );
  
  return (
      <div className="Review-box">
        <h2>Reviews</h2>
        {listReview}
      </div>
  );
}



function CheckDiscount(props) {
  const {isDiscount} = props;
  if(isDiscount == "yes"){
    return(
      <p>Discount 50% Off</p>
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
  const {category, name, harga, isDiscount} = props;
  const Benefits = ["Tidak Kusut Terkena Air", "Bahan Lebih Halus", "Tidak Gerah"];  {/**loops.map */}
  const listBenefits = Benefits.map((itemBenefit) =>
    <li>{itemBenefit}</li>
  );
  

  return(
  <div className="Deskripsi">
  <p className='Cate'>{category}</p>
  <h1 className="Title">{name}</h1>
  <p className='Price'>IDR {harga}</p>
  <CheckDiscount  isDiscount = {isDiscount}/>
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

export default App
