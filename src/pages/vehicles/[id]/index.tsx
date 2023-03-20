//Next
import { GetServerSidePropsContext, NextPage } from 'next'
import { useRouter } from 'next/router'

//Styles
import styles from './Vehicle.module.css'

//Components
import { Layout } from '../../../components/Layout'

//api
import { api } from '../../../services/api'

//Types
import { Vehicle } from '../../../types/vehicle'
type VehicleProps = {
    vehicle: Vehicle
}

const Vehicle : NextPage<VehicleProps> = ({ vehicle }) => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <Layout>
            <section className={styles.vehiclePage}>
                <div className={styles.vehiclePageImg}>
                    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} alt={vehicle.name} />
                </div>
                <div className={styles.vehiclePageData}>
                    <div className={styles.vehiclePageName}>{vehicle?.name}</div>
                    <div className={styles.vehiclePageBar}></div>
                    <div className={styles.vehiclePageInfos}>
                        <div className={styles.vehiclePageInfosLeft}>
                            <div className={styles.vehiclePageInfo}><span>Model:</span>{vehicle.model}</div>
                            <div className={styles.vehiclePageInfo}><span>Manufacturer:</span>{vehicle.manufacturer}</div>
                            <div className={styles.vehiclePageInfo}><span>Cost in credits:</span>{vehicle.cost_in_credits}</div>
                            <div className={styles.vehiclePageInfo}><span>Lenght:</span>{vehicle.length}</div>
                        </div>
                        <div className={styles.vehiclePageInfosRight}>
                            <div className={styles.vehiclePageInfo}><span>Crew:</span>{vehicle.crew}</div>
                            <div className={styles.vehiclePageInfo}><span>Passengers:</span>{vehicle.passengers}</div>
                            <div className={styles.vehiclePageInfo}><span>Cargo Capacity:</span>{vehicle.cargo_capacity}</div>
                            <div className={styles.vehiclePageInfo}><span>Consumables:</span>{vehicle.consumables}</div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Vehicle

export const getServerSideProps = async (context : GetServerSidePropsContext) => {
    const id = context.query.id as string;
    const vehicle = await api.getVehicle(id);
    
    return {
        props: {
            vehicle
        }
    }
}