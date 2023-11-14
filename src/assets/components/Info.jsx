
import Footer from './Footer'
import Social from './Social'
import styles from './styles/info.module.css'

const Info = () => {
    return (
        <div className={`${styles.infoWidth}`}>
            <h1>React Counter App</h1>
            <p className={styles.para}>Count effortlessly with our React Counter App, developed using <code>React.js</code> and Vite. Enjoy speedy performance and seamless state management with <code>Reactjs/Toolkit</code>. Ideal for quick and accurate tallies in any scenario.</p>
            <Social/>
            <Footer/>
        </div>
    )
}

export default Info