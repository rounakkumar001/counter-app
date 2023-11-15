import Btn from "./Btn"

import { increment, decrement } from "../../reducers";

const Butthons = () => {

  return (
    <div>
        <Btn types="btn-danger" operator="-" act={decrement}/>
        <Btn types="btn-primary" operator="+" act={increment}/>
       
    </div>
  )
}

export default Butthons