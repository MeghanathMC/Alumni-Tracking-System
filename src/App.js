
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import MainContainer from './Components/MainContainer';
import Welcome from './Components/Welcome';
import ChatArea from './Components/ChatArea';
import CreateGroups from './Components/CreateGroups';
import Users from './Components/Users';
import Groups from './Components/Groups';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Login /> }/>
        <Route path="app" element={<MainContainer/>}>
        <Route path="welcome" element={<Welcome/>}/>
        <Route path="chat" element={<ChatArea/>}/>
        <Route path="users" element={<Users/>}/>
        <Route path="groups" element={<Groups/>}/>
        <Route path="create-groups" element={<CreateGroups/>}/>
        </Route>
     </Routes>
    {/* <MainContainer/> */}
    </div>
  );
}

export default App;
