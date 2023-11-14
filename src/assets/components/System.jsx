


import DisplayData from "./DisplayData";
import Butthons from "./Butthons";

import styles from './styles/system.module.css'

function System() {


    return (
        <>
            <div className={`${styles.displayWidth} shadow p-3 mb-5 bg-body-tertiary rounded`}>
                <DisplayData />
                <Butthons />
            </div>
        </>
    )
}

export default System;
