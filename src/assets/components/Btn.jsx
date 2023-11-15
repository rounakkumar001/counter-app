import styles from './styles/btn.module.css'
import { useDispatch, useSelector } from "react-redux"
import { minLimit, maxLimit } from './DisplayData';

const Btn = ({types, operator, act}) => {


  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const ConditionalDispatch = () => {
   if(count > minLimit && count < maxLimit){
    dispatch(act());
   }
   else if(count == minLimit && operator == "+"){
    dispatch(act());
   }
   else if(count == maxLimit && operator == '-'){
    dispatch(act());
   }

    // () => dispatch(act())
  }

  return (
    <button type="button" className={`btn ${types} ${styles.btnWidth} `} onClick={ConditionalDispatch} >{operator}</button>
  )
}

export default Btn