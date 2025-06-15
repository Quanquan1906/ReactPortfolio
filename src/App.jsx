import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar.jsx';

function App() {
// This is the main App component that renders the Navbar component
  return (
    <div className={styles.App}>
      <Navbar />
    </div>
    
  )
}

export default App
