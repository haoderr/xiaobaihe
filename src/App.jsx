import { useState,Suspense } from 'react'
import './App.css'
import Cutover from './components/Cutover'
import RoutesConfig from './routes'


function App() {

  return (
    <div className="App">
        <Cutover />
        <Suspense fallback={<div>loading...</div>}>
                <RoutesConfig />
        </Suspense>
    </div>
    
  )
}

export default App
