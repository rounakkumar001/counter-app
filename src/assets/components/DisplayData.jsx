
import { useCallback, useState } from 'react';
import styles from './styles/displayData.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { reset } from '../../reducers';


import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export const maxLimit = 50;
export  const minLimit = -50;

const DisplayData = () => {


 
  const count = useSelector(state => state.counter.value);
  // const dispatch = useDispatch();


  const Positive = {
    backgroundColor: '#0d6efd',
    textColor: '#0d6efd',
    trailColor: '#FFFFFF',
    pathColor: `#0d6efd`,
  }

  const Negative = {
    backgroundColor: '#0d6efd',
    textColor: '#dc3545',
    trailColor: '#FFFFFF',
    pathColor: `#dc3545`,
  }

  return (

    <div className={`${styles.displayWidth}`} >
      <CircularProgressbar
        maxValue={maxLimit}
        minValue={minLimit}
        value={count}
        text={ `${count}` }

        // styles= {buildStyles({
        //   backgroundColor: '#0d6efd',
        //   textColor: '#0d6efd',
        //   trailColor: '#FFFFFF',
        //   pathColor: `#0d6efd`,
        // })}

        styles = {buildStyles(count < 0 ? Negative : Positive)}
      


      />;
    </div>
  )
}

export default DisplayData

// .pos{
//   color :   #0d6efd;
// }
// .neg{
//   color: #dc3545 ;
// }