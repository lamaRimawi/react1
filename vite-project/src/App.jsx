import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Footer from "./component/Footer/Footer.jsx";
import {Route, Routes} from "react-router-dom";
import Tasks from "./pages/Tasks/Tasks.jsx";
import Home from "./pages/Home/Home.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginRegisterForm from "./pages/LoginRegisterForm/LoginRegisterForm.jsx";

function App() {


  return (
    <div>
    <Navbar></Navbar>
      <Routes>
            <Route path={'/'} element={<Home/>}>

            </Route>
              <Route path={'/LoginForm'} element={<LoginRegisterForm />}></Route>
                <Route path={'/Tasks'} element={<Tasks />}></Route>
        </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
