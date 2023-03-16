//Next
import { NextPage } from 'next'

//Styles
import styles from './Movies.module.css'

//Components
import { Layout } from '../../components/Layout'
import { MovieComponent } from '../../components/MovieComponent'

//Api
import { api } from '../../services/api'

//Types
import { movie } from '../../types/movie'

type Props = {
    moviesArray: movie[]
}

const Movies : NextPage<Props> = ({ moviesArray }) => {
    return (
        <Layout>
            <div className={styles.films}>
                <div className={styles.containerFilms}>
                    {moviesArray.map((movie, index)=>(
                        <MovieComponent key={index} data={movie}/>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Movies

export const getServerSideProps = async () => {
    const movies = await api.getFilms();
    const moviesArray = movies.results;

    return {
        props: {
            moviesArray
        }
    }
}