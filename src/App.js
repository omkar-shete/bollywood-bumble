import './App.css';
import BottomNav from './Components/Bottom Nav/BottomNav';
//
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Header from './Components/Header/Header';
import ProfileCards from './Components/ProfileCards/ProfileCards';
import Chats from './Components/Chats/Chats';
import ChatScreen from './Components/Chats/ChatScreen';



//---------------------COMPONENTT---------------------

function App() {

  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path='/' element={<ProfileCards/>}/>

        <Route path='/chats' element={<Chats/>} /> 
        <Route path='/chatscreen' element={<ChatScreen/>}></Route>  
      </Routes>      

      <BottomNav/>
    </div>
  );
}

export default App;
