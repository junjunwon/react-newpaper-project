import Button from './Button'
import styles from './App.module.css'
function App() {
  return (
    <div>
      <h1 className = {styles.title }>
        Welcom Back!
      </h1>
      <Button text={"abc"}></Button>
    </div>
  );
}

export default App;
