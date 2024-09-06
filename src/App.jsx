import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthProvider';
import Login from './Login';
import Dashboard from './Dashboard';
import ClassLeaderboard from './ClassLeaderboard';
import BatchLeaderboard from './BatchLeaderboard';
import StreamLeaderboard from './StreamLeaderboard';
import Leaderboard from './Leaderboard';
import ProtectedRoute from './contexts/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/u/:id' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path='/leaderboard/batch/:batchId' element={<BatchLeaderboard />} />
          <Route path='/leaderboard/stream/:streamId' element={
            <ProtectedRoute roles={['PLACEMENT_COORDINATOR']}>
              <StreamLeaderboard />
            </ProtectedRoute>
          } />
          <Route path='/leaderboard/class/:classId' element={
            <ProtectedRoute roles={['PLACEMENT_COORDINATOR', 'user']}>
              <ClassLeaderboard/>
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
