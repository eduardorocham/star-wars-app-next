//Next
import Link from 'next/link';

//Styles
import styles from './MovieComponent.module.css';

//Types
import { movie } from '../../types/movie'

type Props = {
    data: movie
}

export const SingleMovie = ({data}:Props) => {
    const url = data.url;
    const filmId = url[url.length - 2];

    return (
        <Link href={`/movies/${filmId}`} className={styles.film}>
            <img src={`https://starwars-visualguide.com/assets/img/films/${filmId}.jpg`} alt={data.title} />
            <div className={styles.filmDesc}>
                <div className={styles.filmBar}>
                    <div className={styles.barItem1}></div>
                    <div className={styles.barItem2}></div>
                </div>
                <div className={styles.filmTitle}>{data.title}</div>
            </div>
        </Link>
    )
}