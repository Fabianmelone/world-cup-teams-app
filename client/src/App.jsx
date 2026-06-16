import './App.scss';
import Hero from './components/Hero/Hero';
import ScrollingFlags from './components/ScrollingFlags/ScrollingFlags';
import Groups from './components/Groups/Groups';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Hero />
      <ScrollingFlags />
      <Router>
        <Routes>
          <Route 
            path="/"
            element={<Groups />}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
