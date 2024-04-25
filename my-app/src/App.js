import logo from './logo.svg';
import './App.css';
import Magic from './components/magic/magic';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './main/main';
import Sidebar from './sidebar/sidebar';
import Nav from './nav/nav';
import NewClassComponent from './NewClassComponent/NewClassComponent';
import { Router,Routes,Route,NavLink} from 'react-router-dom'
import Default from './components/default/default';
import { useNavigate } from 'react-router-dom';
import Login from './login/login';
import axios from 'axios'
function App() {
  var firstname="yoga"
  var lastname="lakshmi"
  var age=22
  const navigate=useNavigate()
  const login=()=>{
    navigate('/Login')
  }
  const getData= () => {
    axios.get("https://jsonplaceholder.typicode.com/todos/")
    .then(res => {
      console.log(res.data)
    })
    .catch(err=> {
     console.log(err)
    })
  }
  return (
    
    <div className="App">
      <ul>
      <button onClick={getData}>Getdata</button>
      <button onClick={login}>Login</button>
       <li><NavLink to="/header">Header</NavLink></li>
       <li><NavLink to="/NewClassComponent">New class Component</NavLink></li>
       <li><NavLink to="/Magic">Magic</NavLink></li>
       <li><NavLink to="/Footer">Footer</NavLink></li>
      </ul>
    
    <Routes>
    <Route path='/Login' element={<Login></Login>}></Route>
    <Route path="/header" element={<Header   plname={lastname} page={age}></Header>}></Route>
    <Route path="/NewClassComponent" element={<NewClassComponent  pfname={firstname} plname={lastname} page={age}></NewClassComponent>}></Route>
    <Route path="/Magic" element={<Magic></Magic>}></Route>
    <Route path="/Footer" element={<Footer></Footer>}></Route>



    </Routes>
    
    
     
    {/* /* //   <h1>These is my app component</h1>
    //   <hr></hr>
    //  <Magic></Magic>
    //  <hr></hr>
    //  <Header pfname={firstname} plname={lastname} page={age}></Header>
    //  <hr></hr>
    //  <NewClassComponent pfname={firstname} plname={lastname} page={age}></NewClassComponent>
    //  <hr></hr>
    //  <Footer></Footer>
    //  <hr></hr>
    //  <Nav></Nav>
    //  <hr></hr>
    //  <Main></Main>
    //  <hr></hr>
    //  <Sidebar></Sidebar>
    //  <hr></hr>
    //  <Default pfname={firstname} plname={lastname} page={age}></Default>
    //  <hr></hr>
    //  <Default  plname={lastname} page={age}></Default>
    //  <hr></hr>
    //  <Default pfname={firstname} plname={lastname} ></Default> */} 

    </div>
  );
}

export default App;
