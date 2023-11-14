import styles from './styles/btn.module.css'

const Btn = ({types, value}) => {
  return (
    <button type="button" className={`btn ${types} ${styles.btnWidth} `} >{value}</button>
  )
}

export default Btn