import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Link,useHistory} from 'react-router-dom'
import './RecentInfoInput.css'
import {Card} from '../../components'
import img from '../../images/food.jpg'




const RecentInfoInput = () => {

  return (
    <div className="admin__recentOrder">
      <Card/>
      <div className="admin_recentOrder_sub">
      <div className="admin__cardHeader">
        <div className="part1">
        <div className="subpart1_1">
          <img src={img} alt="food" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
        </div>
        <div className="subpart1_2">
        <h3>Light Lunch-Vagan rice</h3>
        <p>discribing what that rice is </p>
        <button>Add-on</button>
        </div>
        <div className="subpart1_3">
          <h3>$4.99</h3>
        </div>

        </div>
        <hr style={{borderStyle:'dotted',width:'100%'}}/>

        <div className="part2">
            <div className="subpart2_1">
              <h4>Quantity</h4>
              <input type='number' placeholder="Qty"/>
            </div>
            <div className="subpart2_2">
              <h4>Sessions</h4>
              <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            </div>
            <div className="subpart2_3">
              <h4>Sub Total</h4>
              <input type="number" placeholder="$0.00"/>
            </div>
        </div>

        <div className="part3">
        <div className="subpart3_1">
          <h4>Note to the kitchen</h4>
          <input type="text" />
        </div>
        <div className="subpart3_2">
          <button>Add to Cart</button>
        </div>
        </div>
      </div>

      </div>
    </div>
  )
}

export default RecentInfoInput
