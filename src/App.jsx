import { useState,Suspense } from 'react'
import './App.css'
import Cutover from './components/Cutover'
import RoutesConfig from './routes'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
        <Cutover />
        <Suspense >
                <RoutesConfig />
        </Suspense>
        <Footer />
    </div>
    
  )
}

export default App
