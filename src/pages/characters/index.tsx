import { useState } from 'react'
import { GetServerSidePropsContext, NextPage } from 'next'
import { useRouter } from 'next/router'

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

const Characters : NextPage<PropsCharacters> = ({characters}) => {
    const router = useRouter();
    const { page } = router.query;

    const [itemsPerPage] = useState(10);
    const pages = Math.ceil(87 / itemsPerPage);

    
    const updatePageQuery = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (page !== e.currentTarget.value) {
            router.push({
                pathname: '/characters',
                query: { page: e.currentTarget.value }
            })
        }
    }

    return (
        <Layout>
            <div className={styles.characters}>
                <div className={styles.charactersContainer}>
                    {characters.map((character, index)=>(
                        <Character key={index} data={character}/>
                    ))}
                </div>

                <div className={styles.pagination}>
                    {Array.from(Array(pages), (item, index) => {
                        return (
                            <button
                                value={index + 1}
                                className={Number(page) === index + 1 ? styles.buttonPaginationActive : styles.buttonPagination}
                                onClick={updatePageQuery}
                                key={index}
                            >
                                {index + 1}
                            </button>
                        )
                    })}
                </div>
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
