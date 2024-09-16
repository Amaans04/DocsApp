import React from 'react'
import Background from './components/background';
import Foreground from './components/Foreground';
import Card from './components/Card';

const App = () => {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      <Background/>
      <Foreground/>
      <div className='h-70 w-50 rounded-[12px] bg-sky-800'>
      </div>
    </div>
  )
}

export default App
