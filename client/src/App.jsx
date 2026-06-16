import './App.scss';
import Hero from './components/Hero/Hero';
import ScrollingFlags from './components/ScrollingFlags/ScrollingFlags';
import Groups from './components/Groups/Groups';
import  { Routes, Route } from 'react-router-dom';
import Teams from './components/Teams/Teams';
import Players from './components/Players/Players';
import '../src/global.scss';

function App() {
  return (
    <div className="app">
      <Hero />
      <ScrollingFlags />
        <Routes>
          <Route 
            path="/"
            element={<Groups />}
          />
          <Route 
            path="/groups/:slug"
            element={<Teams />}
          />
          <Route 
            path="/groups/:groupSlug/teams/:teamSlug"
            element={<Players />}
          />
        </Routes>
    </div>
  )
}

export default App
