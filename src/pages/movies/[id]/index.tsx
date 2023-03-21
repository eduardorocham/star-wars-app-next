//Next
import { GetServerSidePropsContext, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';

//Styles
import styles from './Movie.module.css'

//Components
import { Layout } from '../../../components/Layout'
import { CharactersCicle } from '../../../components/PersonCircle'

//api
import { api } from '../../../services/api'

//Types
import { Movie } from '../../../types/movie'
import { Character } from '../../../types/character'
type PropsMovie = {
    movie: Movie,
    charactersMovieList: Character[]
}

const Movie : NextPage<PropsMovie> = ({
    movie,
    charactersMovieList
}) => {
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
            <div className={styles.charactersMovie}>
                {charactersMovieList.map((i, k) => (
                    <CharactersCicle data={i} key={k} />
                ))}
            </div>
        </Layout>
    )
}

export default Movie

export const getServerSideProps = async (context : GetServerSidePropsContext) => {
    const id = context.query.id as string;

    const movie = await api.getFilm(id);

    let charactersMovieList : Character[] = [];
    for (let url of movie.characters) {
        try {
            const result = await fetch(url);
            const json = await result.json();
            charactersMovieList.push(json);
        } catch (error) {
            console.error(error);
        }
    }

    return {
        props: {
            movie,
            charactersMovieList
        }
    }
}