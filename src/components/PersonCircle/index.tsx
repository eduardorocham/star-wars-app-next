//Next
import Link from 'next/link';

//Styles
import styles from './PersonCircle.module.css';

//Api
import { api } from '../../services/api'

//Types
import { Character } from '../../types/character'
type Props = {
    data: Character;
}

export const CharactersCicle = ({ data } : Props) => {
    const url = data.url;
    const urlArray = url.split('/');
    const characterId = urlArray[urlArray.length - 2];

    return (
        <Link href={`/characters/${characterId}`} className={styles.personCicle}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`} alt={data.name} />
        </Link>
    )
}