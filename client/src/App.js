import {useEffect} from 'react'
import axios from 'axios'
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import {HomePage} from './pages'
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
    <Router>
      <div className='App'>
        <Switch>

            <Route exact path="/" component={HomePage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
