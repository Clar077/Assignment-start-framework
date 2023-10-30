import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import Contacts from './Components/Contacts/Contacts';
import Notfound from './Components/Notfound/Notfound';
import About from './Components/About/About';
import './App.css';


let routers = createBrowserRouter([
  {path:'' , element : <Layout/> , children : [
    {index:true , element : <Home/>},
    {path:'about' , element : <About/>},
    {path:'portfolio' , element : <Portfolio/> },
    {path:'contacts' , element : <Contacts/>},
    {path:'*' , element : <Notfound/>},
  ]}
])

export default function App () {

  return <RouterProvider router={routers}></RouterProvider>

}
