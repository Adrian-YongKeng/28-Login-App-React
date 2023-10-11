import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { AuthContext} from './AuthContext';
import RequireAuth from './components/RequireAuth';
import useLocalStorage from 'use-local-storage';
import Profile from './pages/Profile';
import CustomNavbar from './components/Navbar';
 

export default function App() {
  const [token, setToken] = useLocalStorage("token",null);
  return (
    <AuthContext.Provider value={{token, setToken}}>
      <BrowserRouter>
        <CustomNavbar/>
        <Routes>
          <Route element = {<Home/>} path="/"/>
          <Route element = {<Login/>} path="/login"/>
          <Route 
            element = {
              <RequireAuth>
                <Dashboard/>
              </RequireAuth>
              } 
            path="/dashboard"
          />
          <Route 
            element ={
              <RequireAuth>
                <Profile/>
              </RequireAuth>
            }
            path='/profile'
          />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

