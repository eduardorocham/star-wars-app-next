//Next
import Link from 'next/link';

//Styles
import styles from './SingleCharacter.module.css'

//Types
import { Character as CharacterType } from '../../types/character'

type PropsCharacter = {
    data: CharacterType,
}

export const Character = ( {data}: PropsCharacter ) => {
    const url = data.url;
    const urlArray = url.split('/');
    const characterId = urlArray[urlArray.length - 2];

    return (
        <Link href={`/characters/${characterId}`} className={styles.person}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`} alt={data.name} />
            <div className={styles.personDesc}>
                <div className={styles.personBar}>
                    <div className={styles.personBarItem1}></div>
                    <div className={styles.personBarItem2}></div>
                </div>
                <div className={styles.personTitle}>{data.name}</div>
            </div> 
        </Link>
    )
}