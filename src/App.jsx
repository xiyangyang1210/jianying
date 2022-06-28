import { useState,Suspense } from 'react'
import './App.css'
// import {Routes,Route} from 'react-router-dom'
import RoutesConfig from './routers'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  

  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>loading...</div>}>
        <RoutesConfig />
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
