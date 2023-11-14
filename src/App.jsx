
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './assets/components/styles/landing.module.css'
import Info from './assets/components/Info'
import System from './assets/components/System'


function App() {


  return (
    <>
      <div className={` ${styles.displayFlex}`}>
        <Info />
        <System />
      </div>
    </>
  )
}

export default App
