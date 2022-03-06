import React,{useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getData} from '../../redux/actions/homeAction'

const Homepage = () => {
  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(getData())
  },[])
  return (
    <div>This is home</div>
  )
}

export default Homepage
