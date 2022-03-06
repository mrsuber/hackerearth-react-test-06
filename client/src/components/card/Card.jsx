import React from 'react'

import banner from '../../images/food.jpg'
import "./Card.css"
const Card = () => {
  return (
    <div className="admin__cardBox">
        <div className="admin__card">
        <div className="admin_card_writing">
          <h2>Main Course</h2>
          <p>When you have every<br/>favorite dishes in a plate</p>
        </div>
      
          <img src={banner} alt="banner" style={{width:'100%', height:'100%', objectFit:'cover',borderRadius:'5px'}}/>

        </div>




    </div>
  )
}

export default Card
