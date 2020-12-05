import React,{useState,useEffect} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Home from './Components/Pages/Home';
import Search from './Components/Pages/Search';
import Country from './Components/Pages/Country';
import TopHeadlines from './Components/Pages/TopHeadlines';
import NotFound from './Components/Pages/NotFound';
import ActivateApi from './Components/Api/ActivateApi';
import Loading from './Components/Pages/Loading';
function App() {
  const [isActivate,setActivate] = useState(false);
  useEffect(()=>{
    const call = async ()=>{
      var data = await ActivateApi();
      if(data && data.value){
        setActivate(true);
      }
    }
    call();
  },[setActivate])
  return (
    <>
    {!isActivate &&
      <Loading />
    }
    {isActivate &&
      <Router>
        <Navbar />
        <Switch>
          
          <Route path='/' exact component={TopHeadlines} />
          
          <Route path='/topheadlines' exact component={TopHeadlines} />
          <Route path='/search' exact component={Search} />
          <Route path='/country' exact component={Country} />
          <Route path='/' component={NotFound} />
        </Switch>
      </Router>
    }
    </>
  );
}

export default App;