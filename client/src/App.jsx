import './App.scss';
import Hero from './components/Hero/Hero';
import ScrollingFlags from './components/ScrollingFlags/ScrollingFlags';
import Groups from './components/Groups/Groups';

function App() {
  return (
    <div className="app">
      <Hero />
      <ScrollingFlags />
      <Groups />
    </div>
  )
}

export default App
