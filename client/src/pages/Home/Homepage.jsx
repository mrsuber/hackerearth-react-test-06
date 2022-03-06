import React,{useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getData} from '../../redux/actions/homeAction'
import {Link} from 'react-router-dom'
import './Homepage.css'
import {Topbar,Sidebar,Card,RecentInfo,ResentUsers} from '../../components'

const Homepage = ({history}) => {



  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getData())

  },[])

  return (
    <>
    <Sidebar history={history}/>
    <div className="admin__main">
      <Topbar/>
      <div className="admin_total_topic">
      Build Your Menu
      </div>

      <div className="admin__details">

      <RecentInfo/>

      <ResentUsers/>
      </div>
    </div>


    </>
  )
}

export default Homepage
