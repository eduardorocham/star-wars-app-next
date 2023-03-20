//Next
import { GetServerSidePropsContext, NextPage } from 'next'
import { useRouter } from 'next/router'

//Styles
import styles from './Character.module.css'

//Components:
import { Layout } from '../../../components/Layout'

//api
import { api } from '../../../services/api'

//Types
import { Character } from '../../../types/character'
type PropsMovie = {
    character: Character
}

const Character : NextPage<PropsMovie> = ({ character }) => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <Layout>
            <div className={styles.characterPage}>
                <div className={styles.characterPageImg}>
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt={character.name} />
                </div>
                <div className={styles.characterPageData}>
                    <div className={styles.characterPageName}>{character.name}</div>
                    <div className={styles.characterPageBar}></div>
                    <div className={styles.characterPageInfos}>
                        <div className={styles.characterPageInfosLeft}>
                            <div className={styles.characterPageInfo}><span>Height:</span>{character.height}</div>
                            <div className={styles.characterPageInfo}><span>Mass:</span>{character.mass}</div>
                            <div className={styles.characterPageInfo}><span>Hair Color:</span>{character.hair_color}</div>
                            <div className={styles.characterPageInfo}><span>Skin Color:</span>{character?.skin_color}</div>
                        </div>
                        <div className={styles.characterPageInfosRight}>
                            <div className={styles.characterPageInfo}><span>Eye Color:</span>{character?.eye_color}</div>
                            <div className={styles.characterPageInfo}><span>Birth Year</span>{character?.birth_year}</div>
                            <div className={styles.characterPageInfo}><span>Gender:</span>{character?.gender}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Character

export const getServerSideProps = async (context : GetServerSidePropsContext) => {
    const id = context.query.id as string;
    const character = await api.getCharacter(id);

    return {
        props: {
            character
        }
    }
}