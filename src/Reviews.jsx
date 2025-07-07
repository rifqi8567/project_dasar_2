import React from 'react';
import './App.css';



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
    <div key={itemReview.id} className="Item">
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


export default ReviewItems;