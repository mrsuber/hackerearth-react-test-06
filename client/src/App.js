import {useEffect} from 'react'
import axios from 'axios'



const App=()=> {
  let url = 'https://smartqdemo.firebaseio.com/events-data.json'


  useEffect(()=>{
    const fetchData = async() => {
      const res = await axios.get(url)
      console.log(res.data)
    }
    fetchData()


  },[url])
  return (

      <div className='App'>
        Indext file

      </div>

  );
}

export default App;
