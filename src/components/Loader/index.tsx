import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import styles from './Loader.module.css';

type LoaderProps = {
    show: boolean
}
export const Loader = ({ show } : LoaderProps) => {

    return (
        <div style={{ display: show ? 'flex' : 'none' }} className={styles.loaderBody}>
            <div className={styles.loader}></div>
        </div>
    )
}