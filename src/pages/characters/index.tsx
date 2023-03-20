import { useState } from 'react'
import { GetServerSidePropsContext, NextPage } from 'next'

//Styles
import styles from './Characters.module.css'

//Api
import { api } from '../../services/api'

//Types
import { Character as CharacterType } from '../../types/character'
type PropsCharacters = {
    characters: CharacterType[]
}

//Components
import { Layout } from '../../components/Layout'
import { Character } from '../../components/SingleCharacter'
import { Pagination } from '../../components/Pagination'

const Characters : NextPage<PropsCharacters> = ({characters}) => {
    const [itemsPerPage] = useState(10);
    const pages = Math.ceil(87 / itemsPerPage);

    return (
        <Layout>
            <div className={styles.characters}>
                <div className={styles.charactersContainer}>
                    {characters.map((character, index)=>(
                        <Character key={index} data={character}/>
                    ))}
                </div>

                <Pagination 
                    pages={pages}
                    path="/characters"
                />
            </div>
        </Layout>
    )
}

export default Characters

export const getServerSideProps = async (context : GetServerSidePropsContext) => {
    const page = context.query.page as string
    const pageNumber = parseInt(page); 

    const response = await api.getCharacteres(pageNumber);
    const characters = response.results

    return {
        props: {
            characters
        }
    }
}
