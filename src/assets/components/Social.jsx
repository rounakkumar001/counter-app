
import styles from './styles/social.module.css'

const Social = () => {
    return (
        <div>
            <a href="https://www.linkedin.com/in/rounak-kumar-497377281/"><i className={`bi bi-linkedin ${styles.iconWidth}`}></i></a>
            <a href="https://github.com/rounakkumar001"><i className={`bi bi-github ${styles.iconWidth}`}></i></a>
            <a href="https://rounakkumar001.github.io/Portfolio1802/"><i className={`bi bi-globe2 ${styles.iconWidth}`}></i></a>
        </div>
    )
}

export default Social