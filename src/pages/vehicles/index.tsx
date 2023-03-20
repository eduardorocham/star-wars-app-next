//Next
import { GetServerSidePropsContext, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'

//Styles
import styles from './Vehicles.module.css'

//Components
import { Layout } from '../../components/Layout'
import { SingleVehicle } from '../../components/SingleVehicle'
import { Pagination } from '../../components/Pagination'

//Api 
import { api } from '../../services/api'

//Types
import { Vehicle } from '../../types/vehicle'
type PropsVehicles = {
    vehicles: Vehicle[]
}

const Vehicles : NextPage<PropsVehicles> = ({ vehicles }) => {
    const router = useRouter();
    const { page } = router.query;

    const [itemsPerPage] = useState(10);
    const pages = Math.ceil(39 / itemsPerPage);

    return (
        <Layout>
             <div className={styles.vehicles}>
                    <div className={styles.vehiclesContainer}>
                        {vehicles.map((vehicle, index)=>(
                            <SingleVehicle 
                                key={index} 
                                data={vehicle}
                                page={parseInt(page as string)}
                            />
                        ))}
                    </div>
                    <Pagination 
                        pages={pages} 
                        path="/vehicles"
                    />
                </div>
        </Layout>
    )
}

export default Vehicles

export const getServerSideProps = async (context : GetServerSidePropsContext) => {
    const page = context.query.page as string;
    const pageNumber = parseInt(page); 
    const response = await api.getVehicles(pageNumber);
    const vehicles = response.results;

    return {
        props: {
            vehicles
        }
    }
}