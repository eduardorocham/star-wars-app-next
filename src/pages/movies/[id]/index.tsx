//Next
import { GetServerSidePropsContext, NextPage } from 'next'
import { useRouter } from 'next/router'

//Styles
import styles from './Movie.module.css'

//Components
import { Layout } from '../../../components/Layout'

//api
import { api } from '../../../services/api'

//Types
import { Movie } from '../../../types/movie'
type PropsMovie = {
    movie: Movie
}

const Movie : NextPage<PropsMovie> = ({ movie }) => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <Layout>
            <div className={styles.moviePage}>
                    <div className={styles.movieImg}>
                        <img src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`} />
                    </div>
                    <div className={styles.movieData}>
                        <div className={styles.moviePageTitle}>{movie.title}</div>
                        <div className={styles.moviePageBar}></div>
                        <div className={styles.moviePageDesc}>{movie.opening_crawl}</div>
                        <div className={styles.infos}>
                            <div className={styles.moviePageInfo}>
                                <span>Episode:</span>{movie.episode_id}
                            </div>
                            <div className={styles.moviePageInfo}>
                                <span>Director:</span>{movie.director}
                            </div>
                            <div className={styles.moviePageInfo}>
                                <span>Producer:</span>{movie.producer}
                            </div>
                            <div className={styles.moviePageInfo}>
                                <span>Releaser Data:</span>{movie.release_date}
                            </div>
                        </div>
                    </div>
            </div>
        </Layout>
    )
}

export default Movie

export const getServerSideProps = async (context : GetServerSidePropsContext) => {
    const id = context.query.id as string;

    const movie = await api.getFilm(id);

    return {
        props: {
            movie
        }
    }
}