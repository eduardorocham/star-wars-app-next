//Next
import Link from 'next/link';

//Styles
import styles from './SingleVehicle.module.css'

//Types
import { Vehicle as VehicleType } from '../../types/vehicle';
type Props = {
    data: VehicleType, 
    page: number
}

export const SingleVehicle = ({data, page} : Props) => {
    const url = data.url;
    const urlArray = url.split('/');

    return (
        <Link href={`/vehicles/${urlArray[5]}`} className={styles.vehicle}>
            <img src= {page <= 2 ? `https://starwars-visualguide.com/assets/img/vehicles/${urlArray[5]}.jpg` : 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'} alt={data.name} />
            <div className={styles.vehicleDesc}>
                <div className={styles.vehicleBar}>
                        <div className={styles.vehicleBarItem1}></div>
                        <div className={styles.vehicleBarItem2}></div>
                </div>
                <div className={styles.vehicleTitle}>{data.name}</div>
            </div>
        </Link>
    )
}