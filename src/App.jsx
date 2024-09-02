import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { ClassLeaderboard } from './ClassLeaderboard';
import { BatchLeaderboard } from './BatchLeaderboard';
import { StreamLeaderboard } from './StreamLeaderboard';
import { Leaderboard } from './Leaderboard';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './Login'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/leaderboard/' element={<Leaderboard/>}/>
        <Route path='/leaderboard/class/:classId' element={<ClassLeaderboard/>}/>
        <Route path='/leaderboard/batch/:batchId' element={<BatchLeaderboard/>}/>
        <Route path='/leaderboard/stream/:streamId' element={<StreamLeaderboard/>}/>
      </Routes>
    </Router>
  )
}

export default App
