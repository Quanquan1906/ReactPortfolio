import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Hero } from './components/Hero/Hero.jsx';
function App() {
// This is the main App component that renders the Navbar component
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero /> 
    </div>
    
  )
}

export default App
